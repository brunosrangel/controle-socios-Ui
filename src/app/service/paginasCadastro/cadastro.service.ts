import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidade } from './../../Interfaces/entidade';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../../Interfaces/ApiResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class EntidadeService {
  private apiUrlUsuario = environment.apiUrl + 'Entidade';

  constructor(private httpClient: HttpClient,private cookieService: CookieService) {}

  getHeaders(): HttpHeaders {
    var token = this.cookieService.get('token');
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return headers;
  }
  getEntidades(): Observable<ApiResponse> {
    var headers = this.getHeaders(); // Invocar a função getHeaders
    return this.httpClient.get<ApiResponse>(this.apiUrlUsuario,{ headers: headers})
  }

  SalvarEntidade(Entidade: Entidade): Observable<ApiResponse> {
    const headers = this.getHeaders();
    debugger
    return this.httpClient.post<ApiResponse>(`${this.apiUrlUsuario}`, Entidade, { headers });

  }
  atualizaEntidade(Entidade: Entidade): Observable<ApiResponse>{
    const headers = this.getHeaders();
    return this.httpClient.put<ApiResponse>(`${this.apiUrlUsuario}` +"/"+`${Entidade.id}`  , Entidade, { headers });

  }
}
