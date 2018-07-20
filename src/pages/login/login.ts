import { Component, Input } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  waiting: boolean
  @Input() username:string;
  @Input() password:string;

  constructor(public navCtrl: NavController, public loadCtrl:LoadingController) {
    this.waiting = false;
    this.username = "";
    this.password = "";
  }

  public clearInput():void{
    this.username = "";
    this.password = "";
  }

  public login():void{
    this.navCtrl.push(TabsPage)
  }

}
