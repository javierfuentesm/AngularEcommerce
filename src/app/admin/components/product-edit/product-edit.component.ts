import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {

    this.activeRoute.params.subscribe((params: Params) => {

      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue({
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image
        });
      });

    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id,product).subscribe(updatedProduct => {
        console.log(updatedProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      description: ['', Validators.required],
      image: ['']
    });
  }

}
