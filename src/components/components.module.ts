import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { LogoutButtonComponent } from './logout-button/logout-button';
@NgModule({
	declarations: [LogoutButtonComponent],
	imports: [IonicModule],
	exports: [LogoutButtonComponent]
})
export class ComponentsModule {}
