import { Component, Input } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  waiting: boolean
  @Input() username:string;
  @Input() password:string;

  constructor(public navCtrl: NavController, public loadCtrl:LoadingController, public authService:AuthServiceProvider ) {
    this.waiting = false;
    this.username = "";
    this.password = "";
  }

  public clearInput():void{
    this.username = "";
    this.password = "";
  }

  public login():void{
    this.authService.test()
    //this.navCtrl.push(TabsPage)
  }

}
