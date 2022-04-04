import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { deleteProduct, loadProducts, setProductInEditForm } from 'src/app/state/product/actions';
import { selectProductProducts, selectTotalRecords } from 'src/app/state/product/selector';
import { Product } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public products: Observable<Product[]>
  public totalRecords: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadProducts());

    this.products = this.store.select(selectProductProducts)
      .pipe(map(products => {
        return products.map(item => {
          const product: Product = {
            id: item.id,
            name: item.name
          }
          return product;
        })
      }));

    this.totalRecords = this.store.select(selectTotalRecords);
  }

  public deleteClick(id: string): void {
    this.store.dispatch(deleteProduct({ id: id }))
  }

  public editClick(product: Product): void {
    this.store.dispatch(setProductInEditForm({
      product: { id: product.id, name: product.name }
    }))
  }

}
