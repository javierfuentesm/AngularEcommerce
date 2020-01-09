import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) {}

  clickedProduct(id: number) {
    console.log(`producto ${id}`);
  }
  fetchProducts() {
   this.productsService
      .getAllProducts()
      .subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.fetchProducts();
    console.log(this.products);
  }
}
