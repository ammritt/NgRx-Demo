import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product';
import * as ProductActions from '../state/product.actions';
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;


  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.displayCode$ = this.store.select(getShowProductCode);

    this.errorMessage$ = this.store.select(getError);
    
    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$ = this.store.select(getCurrentProduct);

    this.products$ = this.store.select(getProducts);
  }

  ngOnDestroy(): void {

  }

  checkChanged(): void {
    // this.displayCode = !this.displayCode;
    this.store.dispatch(ProductActions.toggleProductCode())
  }

  newProduct(): void {
    //this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.initializeCurrentProduct());

  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(ProductActions.setCurrentProduct({currentproductId: product.id } ));
  }

}
