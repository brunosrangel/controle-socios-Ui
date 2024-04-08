import { IService } from './../../../../service/generic/servico/iservico-generico.service';
import { EntidadeService } from './../../../../service/paginasCadastro/entidade.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioService } from '../../../../service/paginasCadastro/usuario.service';
import {
  EntidadeModel,
  EscolaridadeUsuarioModel,
  PerfilModel,
  UsuarioModel,
} from '../../../../Interfaces/UsuarioModel';
import { Entidade } from '../../../../Interfaces/entidade';
import { PerfilService } from '../../../../service/paginasCadastro/perfil.service';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../../Interfaces/ApiResponse';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css',
})
export class CadastroUsuarioComponent implements OnInit {
  // Variáveis para dropdowns
  ListaEscolaridades: EscolaridadeUsuarioModel[] = [];
  perfis: PerfilModel[] = [];
  entidades: Entidade[] = [];
  saving: any;
  _usuario: UsuarioModel = {} as UsuarioModel;
  private apiUrl = environment.apiUrl;

  constructor(
    private usuarioService: UsuarioService,
    private _perfilis: PerfilService,
    private _entidades: EntidadeService,
    @Inject('IService') private _service: IService<ApiResponse>
  ) {}

  ngOnInit(): void {
    this.carregaDropBox();
  }

  carregaDropBox(): void {
    this._service.getAll(`${this.apiUrl}Entidade`).subscribe((dt) => {
      this.entidades = dt.data as Entidade[];
    });
    this._service
      .getAll(`${this.apiUrl}EscolaridadeUsuario`)
      .subscribe(
        (dt) =>
          (this.ListaEscolaridades = dt.data as EscolaridadeUsuarioModel[])
      );
    this._service
      .getAll(`${this.apiUrl}Perfil`)
      .subscribe((data) =>{

        this.perfis = data.data as PerfilModel[]
        console.log(this.perfis)
      }
      );
  }

  cadastrarUsuario(form: NgForm) {}
}
