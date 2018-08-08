import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { Customer } from 'models/Customer';
import { CustomerService } from 'providers/customer-service/customer-service';

/**
 * Generated class for the CustomerSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'customer-search',
  templateUrl: 'customer-search.html',
})
export class CustomerSearchPage {

  private nameToSearch:string
  private custs: Customer[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private custService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerSearchPage');
  }

  public searchCustomers(): void {
    console.log('search customer start')
    // if the value is an empty string don't filter the items
    if (this.nameToSearch && this.nameToSearch.trim() != '') {
      this.custService.searchCustomers(this.nameToSearch).subscribe(
        custs => {
          this.custs = custs
        }
      )
    }else{
      this.custs = [];
    }
  }

  public selectCustomer(cust:Customer){
    this.navCtrl.push('customer-order', {customer: cust});
  }

}
