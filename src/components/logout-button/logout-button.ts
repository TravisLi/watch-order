import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LogoutButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logout-button',
  templateUrl: 'logout-button.html'
})
export class LogoutButtonComponent {

  constructor(private authService:AuthService) {
  }

  public logout():void{
    this.authService.logout();
  }

}
