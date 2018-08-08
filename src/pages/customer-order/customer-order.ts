import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { OrderService } from 'providers/order-service/order-service';
import { Order } from 'models/order';
import { Customer } from 'models/Customer';

/**
 * Generated class for the CustomerOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'customer-order',
  templateUrl: 'customer-order.html',
})
export class CustomerOrderPage {

  public orders:Order[];
  public customer: Customer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderService: OrderService) {
    this.customer = navParams.get("cust");
    if(this.customer){
      orderService.getOrder(this.customer.id).subscribe(orders =>{
        this.orders = orders;
      })
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerOrderPage');
  }

}
