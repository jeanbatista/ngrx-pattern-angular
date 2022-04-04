import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { ProductsService } from "src/app/products/service/products.service";
import { addProduct, deleteProduct, editProduct, loadedProductsApi, loadProducts } from "./actions";

@Injectable()
export class ProductEffects {

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(loadProducts),
        mergeMap(() => this.productService.getAll()
            .pipe(
                map(products => loadedProductsApi({ payload: products })),
                catchError(() => EMPTY)
            )
        )
    ))

    addProduct$ = createEffect(() => this.actions$.pipe(
        ofType(addProduct),
        mergeMap(({ product }) => this.productService.create({ id: product.id, name: product.name })
            .pipe(
                map(() => loadProducts()),
                catchError(() => EMPTY)
            )
        )
    ))

    deleteProduct$ = createEffect(() => this.actions$.pipe(
        ofType(deleteProduct),
        mergeMap(({ id }) => this.productService.delete(id)
            .pipe(
                map(() => loadProducts()),
                catchError(() => EMPTY)
            )
        )
    ))

    editProduct$ = createEffect(() => this.actions$.pipe(
        ofType(editProduct),
        mergeMap(({ product }) => this.productService.update({ id: product.id, name: product.name })
            .pipe(
                map(() => loadProducts()),
                catchError(() => EMPTY)
            )
        )
    ))

    constructor(
        private actions$: Actions,
        private productService: ProductsService
    ) { }

}