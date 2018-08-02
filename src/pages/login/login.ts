import { Component, Input } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CustomerSearchPage } from '../../pages/customer-search/customer-search';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @Input() username:string;
  @Input() password:string;

  constructor(private navCtrl: NavController, private loadCtrl:LoadingController, private toastCtrl:ToastController, private authService:AuthService ) {
    this.username = "";
    this.password = "";
  }

  public clearInput():void{
    this.username = "";
    this.password = "";
  }

  public login():void{
    
    let loading = this.loadCtrl.create({
      content: "loading"
    })
    loading.present()
    
    this.authService.login(this.username, this.password).subscribe(user=>{
      loading.dismiss();
      if(user){
        this.authService.setUser(user);
        this.navCtrl.push(CustomerSearchPage);
      }else{
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }
    ,error=>{
      loading.dismiss();
      console.log(error);
    })
  }

}
