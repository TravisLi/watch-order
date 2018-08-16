import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';

import { LoginPageModule } from '../pages/login/login.module';
import { CustomerSearchPageModule } from '../pages/customer-search/customer-search.module';
import { CustomerOrderPageModule } from '../pages/customer-order/customer-order.module';

import { AuthService } from '../providers/auth-service/auth-service';
import { CustomerService } from '../providers/customer-service/customer-service';
import { OrderService } from '../providers/order-service/order-service';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{backButtonText:'',}),
    HttpClientModule,
    ComponentsModule,
    LoginPageModule,
    CustomerSearchPageModule,
    CustomerOrderPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    CustomerService,
    OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
