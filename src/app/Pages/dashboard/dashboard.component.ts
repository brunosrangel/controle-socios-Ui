import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { CookieService } from 'ngx-cookie-service';

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

  // Adicione métodos e lógica adicionais conforme necessário
}
