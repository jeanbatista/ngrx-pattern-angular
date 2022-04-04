import { createAction, props } from "@ngrx/store";
import { ProductModel } from "src/app/products/service/product.model";
import { Product } from "./state";

export const addProduct = createAction(
    '[Product] Add',
    props<{ product: Product }>()
)

export const deleteProduct = createAction(
    '[Product] Delete',
    props<{ id: any }>()
)

export const setProductInEditForm = createAction(
    '[Product] Set Edit Form',
    props<{ product: Product | null }>()
)

export const editProduct = createAction(
    '[Product] Edit',
    props<{ product: Product }>()
)

export const loadProducts = createAction(
    '[Product] Load'
)

export const loadedProductsApi = createAction(
    '[Product API] Loaded Success',
    props<{ payload: ProductModel[] }>()
)
