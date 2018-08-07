import { Component, Input } from '@angular/core';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the NavBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent {

  @Input()
  public title:string;

  constructor(private authService:AuthService) {
    this.title = '';
  }

  public logout():void{
    this.authService.logout();
  }

}
