import { NgForm } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entidade } from './../../../../Interfaces/entidade';
import { CadastroEntidadeComponent } from '../cadastro-entidade.component';
import { EntidadeService } from './../../../../service/paginasCadastro/cadastro.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  entidade: Entidade;

  saving: any;
  constructor(
    private entidadeService: EntidadeService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<CadastroEntidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { entidade: Entidade }
  ) {
    this.entidade = { ...data.entidade }; // Clonar a entidade para evitar alterar diretamente os dados
    console.log(this.entidade)
  }

  salvarEntidade(form: NgForm): void {

    if (form.valid) {
      this.saving = true;
     this.entidadeService.atualizaEntidade(this.entidade).subscribe(
        (data) => {
          console.log(data)
          if (data.statusCode == 204) {
            this.dialogRef.close(this.entidade);
            this.showSuccess('Entidade gravada com sucesso');
          } else {
            this.showError(data.errorMessage);
          }
          this.saving = false;
          form.resetForm();
           this.dialogRef.close(this.entidade);
        },
        (error) => {
          // Trate o erro conforme necessário
          this.dialogRef.close(this.entidade);
          this.showError('Ocorreu um erro ao salvar a entidade:  ' + error);
          this.saving = false;
          form.resetForm();
        }
      );
    }

  }

  showSuccess(msg: string) {
    this.toastr.success(msg);
  }
  showError(msg: string) {
    this.toastr.error(msg, '', {
      positionClass: 'toast-top-full-width',
    });
  }
}
