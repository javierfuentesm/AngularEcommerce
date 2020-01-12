import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  public displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(deletedProduct: Product) {
    this.productService.deleteProduct(deletedProduct.id).subscribe(res => {
      if (res) {
        this.products = this.products.filter(
          (product: Product) => product.id !== deletedProduct.id
        );
      }
    });
  }
}
