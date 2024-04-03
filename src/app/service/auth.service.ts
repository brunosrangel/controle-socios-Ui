import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { IUsuario } from '../interfaces/IUsuario';

const apiUrlUsuario = environment.apiUrl + "usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

    logar(usuario: IUsuario) : Observable<any> {

     return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
        tap((resposta) => {
          console.log(resposta);
          debugger
          if(!resposta.sucesso) return;

          localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
          localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));

          this.router.navigate(['']);
        }));

        // return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
        //   if(!resposta.sucesso) return;

        //   localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
        //   localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
        //   this.router.navigate(['']);
        // }));
    }
    get obterIdUsuarioLogado(): any {
      return localStorage.getItem('usuario')
    }
    get obterTokenUsuario(): any {

      return localStorage.getItem('token')

    }

    get logado(): boolean {
      return localStorage.getItem('token') ? true : false;
    }
    deslogar() {
      localStorage.clear();
      this.router.navigate(['login']);
  }

}
