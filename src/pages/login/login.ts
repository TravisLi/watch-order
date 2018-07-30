import { Component, Input } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  waiting: boolean
  @Input() username:string;
  @Input() password:string;

  constructor(public navCtrl: NavController, public loadCtrl:LoadingController, private authService:AuthService ) {
    this.waiting = false;
    this.username = "";
    this.password = "";
  }

  public clearInput():void{
    this.username = "";
    this.password = "";
  }

  public login():void{
    this.authService.login(this.username, this.password).do(user=>{
      this.authService.user = user;
    },error=>{
      console.log(error);
    })
    //this.navCtrl.push(TabsPage)
  }

}
