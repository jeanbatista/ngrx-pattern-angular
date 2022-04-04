import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';
import { setInMemory, getAllInMemory } from './products-in-memory';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public getAll(): Observable<ProductModel[]> {
    return new Observable(subscriber => {
      subscriber.next(getAllInMemory());
      subscriber.complete();
    })
  }

  public create(payload: ProductModel): Observable<void> {
    return new Observable(subscriber => {
      const data = getAllInMemory();
      setInMemory([...data, payload]);

      subscriber.next();
      subscriber.complete();
    })
  }

  public delete(id: any): Observable<void> {
    return new Observable(subscriber => {
      const data = [...getAllInMemory()];
      const index = data.findIndex(item => item.id === id);
      data.splice(index, 1);

      setInMemory(data);

      subscriber.next();
      subscriber.complete();
    })
  }

  public update(product: ProductModel): Observable<void> {
    return new Observable(subscriber => {
      const data = [...getAllInMemory()];
      const index = data.findIndex(item => item.id === product.id);
      data[index] = product;

      setInMemory(data);

      subscriber.next();
      subscriber.complete();
    })
  }

}
