import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addProduct, editProduct, setProductInEditForm } from 'src/app/state/product/actions';
import { selectProductEditForm } from 'src/app/state/product/selector';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  private editForm = false;

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]]
    });

    this.store.select(selectProductEditForm).subscribe(res => {
      if (res) {
        this.form.patchValue({
          id: res?.id,
          name: res?.name
        })
        this.editForm = true;
      } else {
        this.editForm = false;
      }
    });
  }

  public get editOrAddText(): string {
    return this.editForm ? 'Save' : 'Add';
  }

  public get formValid(): boolean {
    return this.form.valid;
  }

  public addOrSaveClick(): void {
    if (!this.form.valid) return;

    if (this.editForm) {
      this.store.dispatch(editProduct({
        product: { ...this.form.getRawValue() }
      }));
      this.store.dispatch(setProductInEditForm({ product: null }));
    } else {
      this.store.dispatch(addProduct({
        product: { ...this.form.getRawValue(), id: uuid() }
      }))
    }

    this.form.reset();
  }

}
