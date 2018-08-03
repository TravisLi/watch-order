import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { CustomerSearchPage } from './customer-search';

@NgModule({
  declarations: [
    CustomerSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerSearchPage),
  ],
})
export class CustomerSearchPageModule {}
