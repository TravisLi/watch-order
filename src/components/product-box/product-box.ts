import { Component, Input } from '@angular/core';
import { Product } from '../../models/product'

/**
 * Generated class for the ProductBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-box',
  templateUrl: 'product-box.html'
})
export class ProductBoxComponent {

  @Input()
  product: Product;

  constructor() {
    console.log('Hello ProductBoxComponent Component');
  }

  classify():string {
    if(this.product.price > 100000){
      return '1';
    }

    if(this.product.price > 50000){
      return '2';
    }

    return '3';

  }

}
