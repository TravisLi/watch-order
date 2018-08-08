import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { CustomerSearchPage } from './customer-search';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    CustomerSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerSearchPage),
    ComponentsModule
  ],
})
export class CustomerSearchPageModule {}
