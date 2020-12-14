import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toogle Product Code');

export const setCurrentProduct = createAction('[Product] Set Current ProductId',
props<{currentproductId: number}>());

export const clearCurrentProduct = createAction('[Product] Clean current Product');

export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction('[Product] Load Success', props<{products: Product[]}>());

export const loadProductsFailure = createAction('[Product] Load Fail', props<{error: string}>());

export const updateProduct = createAction('[Product] Update Product', props<{product: Product}>());

export const updateProductSuccess = createAction('[Product] Update Product Success', props<{product: Product}>());

export const updateProductFailure = createAction('[Product] Update Product Failure', props<{error: string}>());

