import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerOrderPage } from './customer-order';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  declarations: [
    CustomerOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerOrderPage),
    ComponentsModule
  ],
})
export class CustomerOrderPageModule {}
