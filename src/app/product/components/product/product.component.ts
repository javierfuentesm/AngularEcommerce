import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  constructor(
    private cartService: CartService
  ) {
    console.log('contructor');
  }
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();
  /*   ngOnChanges(changes: SimpleChanges) {
    console.log('Ya cambio');
    console.log(changes);
  } */
  ngOnInit() {
    console.log('Init');
  }
  ngDoCheck() {
    // es como en componentDidMount
    console.log('Do check');
  }
  ngOnDestroy() {
    console.log('Destroy');
  }

  addCart() {
    //this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
