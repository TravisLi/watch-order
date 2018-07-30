import { Component } from '@angular/core';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../providers/customer-service/customer-service';

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
    
    // if the value is an empty string don't filter the items
    if (this.nameToSearch && this.nameToSearch.trim() != '') {
      this.custService.searchCustomers(this.nameToSearch).do(
        custs => {
          this.custs = custs
        }
      )
    }else{
      this.custs = [];
    }
  }

}
