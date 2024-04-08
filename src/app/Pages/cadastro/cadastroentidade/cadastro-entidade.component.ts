import { DialogComponent } from './dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { Entidade } from './../../../Interfaces/entidade';
import { EntidadeService } from './../../../service/paginasCadastro/cadastro.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cadastro-entidade',
  templateUrl:'./cadastro-entidade.component.html',
  styleUrls: ['./cadastro-entidade.component.css'],
})
export class CadastroEntidadeComponent implements OnInit {
  _entidade = {} as Entidade;
  ListaEntidades: Entidade[] = [];
  saving: any;
  displayedColumns: string[] = ['descricaoEntidade', 'statusEntidade', 'actions'];


  constructor(
    private entidadeService: EntidadeService,
    private toastr: ToastrService,
    private MatDialog : MatDialog

) {}
  ngOnInit(): void {

    this.carregarEntidades();
  }
  get isValid(): boolean {
    return (
      this._entidade.descricaoEntidade !== '' &&
      this._entidade.statusEntidade !== null
    );
  }

  carregarEntidades(): void {
    this.entidadeService
      .getEntidades()
      .subscribe((entidades) => (this.ListaEntidades = entidades.data as Entidade[] ));
  }
  showSuccess(msg: string) {
    this.toastr.success(msg);
  }
  showError(msg: string) {
    this.toastr.error(msg, '', {
      positionClass: 'toast-top-full-width',
    });
  }

  salvarEntidade(form: NgForm): void {
    if (form.valid) {
      this.saving = true;
     this.entidadeService.SalvarEntidade(this._entidade).subscribe(
        (data) => {
          console.log('data é : ' + data.statusCode);
          if (data.statusCode == 204) {
            this.showSuccess('Entidade gravada com sucesso');
          } else {
            this.showError(data.errorMessage);
          }
          this.saving = false;
          form.resetForm();
        },
        (error) => {
          // Trate o erro conforme necessário
          this.showError('Ocorreu um erro ao salvar a entidade:  ' + error);
          this.saving = false;
          form.resetForm();
        }
      );
    }
  }

  editarEntidade(entidade: any): void {
    const dialogRef = this.MatDialog.open(DialogComponent, {
      width: '400px',

      data: { entidade: entidade } // Passa a entidade para o diálogo
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      // Atualize os dados da entidade se o usuário salvou as alterações
      if (result) {
        // Atualize a entidade na sua lista ou no banco de dados
        // Exemplo: this.entidadeService.atualizarEntidade(result.entidade);
      }
    });
  }


  excluirEntidade(entidade: any): void {
    // Implemente a lógica para excluir a entidade
  }

}
