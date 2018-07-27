import { Component } from '@angular/core';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-search',
  templateUrl: 'customer-search.html',
})
export class CustomerSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerSearchPage');
  }

}
