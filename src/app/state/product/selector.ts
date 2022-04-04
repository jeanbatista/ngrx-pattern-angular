import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductState } from "./state";

const selectProduct = (state: AppState) => state.product;

export const selectProductProducts = createSelector(
    selectProduct,
    (state: ProductState) => state.products
)

export const selectProductEditForm = createSelector(
    selectProduct,
    (state: ProductState) => state.editForm
)

export const selectTotalRecords = createSelector(
    selectProduct,
    (state: ProductState) => state.products.length
)