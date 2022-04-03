import { createAction, props } from "@ngrx/store";
import { Product } from "./state";

export const addProduct = createAction(
    '[Product] Add',
    props<{ product: Product }>()
)

export const deleteProduct = createAction(
    '[Product] Delete',
    props<{ id: string }>()
)

export const setProductInEditForm = createAction(
    '[Product] Set Product Edit Form',
    props<{ product: Product | null }>()
)

export const editProduct = createAction(
    '[Product] Edit',
    props<{ product: Product }>()
)
