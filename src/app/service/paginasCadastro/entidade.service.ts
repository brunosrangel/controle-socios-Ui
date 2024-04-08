import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../Interfaces/UsuarioModel';

import { environment } from '../../environments/environment';
import { GenericService } from '../generic/servico/servico-generico.service';
import { GenericRepository } from '../generic/repositorio/repositorio-generico.service';
import { Entidade } from '../../Interfaces/entidade';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService extends GenericService<Entidade>  implements OnInit{
  url: string;
  constructor(
    http: HttpClient
  ) {
    super(
      new GenericRepository<Entidade>(http)
      );
    this.url = `${environment.apiUrl}/entidade`;
  }
  ngOnInit(): void {

  }
 consultaEntiudades(): Observable<Entidade>{
  return this.getAll(this.url);
 }
}
