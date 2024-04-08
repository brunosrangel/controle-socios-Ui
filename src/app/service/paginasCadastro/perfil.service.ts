import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilModel, UsuarioModel } from '../../Interfaces/UsuarioModel';

import { environment } from '../../environments/environment';
import { GenericService } from '../generic/servico/servico-generico.service';
import { GenericRepository } from '../generic/repositorio/repositorio-generico.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends GenericService<PerfilModel>  implements OnInit{
  url: string;
  constructor(
    http: HttpClient
  ) {
    super(
      new GenericRepository<PerfilModel>(http)
      );
    this.url = `${environment.apiUrl}/perfil`;
  }
  ngOnInit(): void {

  }
 consultarPerfils(): Observable<PerfilModel>{
  return this.getAll(this.url);
 }
}
