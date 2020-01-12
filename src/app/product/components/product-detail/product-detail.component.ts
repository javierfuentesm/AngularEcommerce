import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService
      .getProduct(id)
      .subscribe(product => (this.product = product));
  }
  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };

    this.productsService
      .createProduct(newProduct)
      .subscribe(product => console.log(product));
  }
  updateProduct() {
    const updatedProduct: Partial<Product> = {
      id: '222',
      title: 'No nuevo',
      image: 'assets/images/hoodie.png',
      description: 'edicion producto'
    };

    this.productsService
      .updateProduct('222', updatedProduct)
      .subscribe(product => console.log(product));
  }
  deleteProduct() { 
    this.productsService
      .deleteProduct('222')
      .subscribe(product => console.log(product));
  }
}
