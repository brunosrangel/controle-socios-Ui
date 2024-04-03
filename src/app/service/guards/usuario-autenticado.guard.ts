import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate{
    constructor(
      private _authservice: AuthService,
      private router: Router) { }

    canActivate(){
      if (this._authservice.logado) {
        return true;
      }

      this.router.navigate(['login']);
      return false;
    }
}
