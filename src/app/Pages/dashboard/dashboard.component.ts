import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  // Exemplo de propriedades para controle de acesso
  usuarioAutenticado: boolean = true; // Altere conforme necessário
  usuarioAdministrador: boolean = true; // Altere conforme necessário
  nomeUsuario!: string;
  @ViewChild('drawer') drawer!: MatSidenav;
  isMenuOpen = false;

  constructor(private _authService: AuthService,private cookieService: CookieService) { }

  ngOnInit(){

    this.nomeUsuario = this.cookieService.get('nomeUsuario');
    if(this.nomeUsuario == null)
    {
      this.usuarioAutenticado = false
    }

  }

  deslogar(){
    this._authService.deslogar();
  }

  toggleSidenav() {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen;
  }

}
