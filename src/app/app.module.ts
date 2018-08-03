import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';

import { LoginPage } from '../pages/login/login';
import { CustomerSearchPage } from '../pages/customer-search/customer-search';

import { AuthService } from '../providers/auth-service/auth-service';
import { CustomerService } from '../providers/customer-service/customer-service';
import { OrderService } from '../providers/order-service/order-service';
import { XhrInterceptor } from '../providers/interceptor/xhrInterceptor';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CustomerSearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CustomerSearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    CustomerService,
    OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ]
})
export class AppModule {}
