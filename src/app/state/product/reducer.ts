import { createReducer, on } from "@ngrx/store";
import { loadedProductsApi, setProductInEditForm } from "./actions";
import { ProductState } from "./state";

export const initialState: ProductState = {
    products: [],
    editForm: null
};

export const productReducer = createReducer(
    initialState,
    on(setProductInEditForm, (state, { product }) => {
        return { ...state, editForm: product };
    }),
    on(loadedProductsApi, (state, { payload }) => {
        return { ...state, products: payload };
    })

)