import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';
import * as ProductActions from './product.actions';
@Injectable()
export class ProductEffects {
    constructor(private readonly actions$: Actions, private readonly productService: ProductService) {}

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => ProductActions.loadProductsSuccess({products})),
                catchError(error => 
                    of(ProductActions.loadProductsFailure({error}))
                )
            ))
        )
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            concatMap((action: any) => 
                this.productService.updateProduct(<Product>action).pipe(
                    map(product =>
                        ProductActions.updateProductSuccess({product})),
                        catchError(error => of(ProductActions.updateProductFailure({ error })))
                )
            )
        )
    });
}