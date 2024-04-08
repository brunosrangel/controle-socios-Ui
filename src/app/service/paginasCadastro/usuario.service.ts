import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../Interfaces/UsuarioModel';

import { environment } from '../../environments/environment';
import { GenericService } from '../generic/servico/servico-generico.service';
import { GenericRepository } from '../generic/repositorio/repositorio-generico.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<UsuarioModel>  implements OnInit{
  url: string;
  constructor(
    http: HttpClient
  ) {
    super(
      new GenericRepository<UsuarioModel>(http)
      );
    this.url = `${environment.apiUrl}/usuario`;
  }
  ngOnInit(): void {

  }
 consultaUsuarios(): Observable<UsuarioModel>{
  return this.getAll(this.url);
 }
}
