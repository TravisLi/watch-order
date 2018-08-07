import { Component, Input } from '@angular/core';
import { Order } from '../../models/Order';
/**
 * Generated class for the OrderBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-box',
  templateUrl: 'order-box.html'
})
export class OrderBoxComponent {

  @Input()
  order:Order

  constructor() {
    console.log('Hello OrderBoxComponent Component');
  }

}
