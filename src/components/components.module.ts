import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavBarComponent } from './nav-bar/nav-bar';
import { OrderBoxComponent } from './order-box/order-box';
import { ProductBoxComponent } from './product-box/product-box';
@NgModule({
	declarations: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent],
	imports: [IonicModule],
	exports: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent]
})
export class ComponentsModule {}
