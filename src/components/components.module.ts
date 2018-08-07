import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavBarComponent } from './nav-bar/nav-bar';
import { OrderBoxComponent } from './order-box/order-box';
@NgModule({
	declarations: [NavBarComponent,
    OrderBoxComponent],
	imports: [IonicModule],
	exports: [NavBarComponent,
    OrderBoxComponent]
})
export class ComponentsModule {}
