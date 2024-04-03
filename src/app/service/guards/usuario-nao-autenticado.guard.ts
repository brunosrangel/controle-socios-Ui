import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate{
    constructor(
      private _authservice: AuthService,
      private router: Router) { }

    canActivate(){
      if (this._authservice.logado) {
        this.router.navigate(['']);
        return false;
      }

      return true;
    }
}
