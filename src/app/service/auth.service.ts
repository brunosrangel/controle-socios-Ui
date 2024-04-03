import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , catchError, retry, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { IUsuario } from '../Interfaces/IUsuario';
import { ApiResponse } from '../Interfaces/ApiResponse';

const apiUrlUsuario = environment.apiUrl + "usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toastr: any;

  constructor(private httpClient: HttpClient,
    private router: Router) { }
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}
    logar(usuario: IUsuario): Observable<ApiResponse> {

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<ApiResponse>(`${apiUrlUsuario}/login`, usuario, { headers });

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

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
      this.showError(errorMessage)
    } else {
      // Erro ocorreu no lado do servidor

      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      this.showError(errorMessage)
    }
    return throwError(errorMessage);
  };

  showSuccess(msg : string) {
    this.toastr.success(msg);
  }
  showError(msg : string) {
    this.toastr.error(msg);
  }

}


