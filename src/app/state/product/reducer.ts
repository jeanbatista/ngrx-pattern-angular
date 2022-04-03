import { createReducer, on } from "@ngrx/store";
import { addProduct, deleteProduct, editProduct, setProductInEditForm } from "./actions";
import { ProductState } from "./state";

export const initialState: ProductState = {
    products: [],
    editForm: null
};

export const productReducer = createReducer(
    initialState,
    on(addProduct, (state, { product }) => {
        return { ...state, products: [...state.products, product] };
    }),
    on(deleteProduct, (state, { id }) => {
        const index = state.products.findIndex(item => item.id === id);
        if (index === -1) return state;

        const products = [...state.products];

        products.splice(index, 1);

        let newState = {};

        if (state.editForm && state.editForm.id === id) {
            newState = { editForm: null };
        }

        return { ...state, ...newState, products };
    }),
    on(setProductInEditForm, (state, { product }) => {
        return { ...state, editForm: product };
    }),
    on(editProduct, (state, { product }) => {
        const index = state.products.findIndex(item => item.id === product.id);
        if (index === -1) return state;

        const products = [...state.products];

        products[index] = product;

        return { ...state, products };
    })
)