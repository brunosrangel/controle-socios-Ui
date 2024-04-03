import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../service/auth.service';
import { IUsuario } from '../../Interfaces/IUsuario';
import { Router } from '@angular/router';
import { ApiResponse } from '../../Interfaces/ApiResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criarForm();
  }
  criarForm() {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  // logar(){
  //   if(this.formLogin.invalid) return;

  //   var usuario = this.formLogin.getRawValue() as IUsuario;
  //   debugger

  //   (await this._authService.logar(usuario)).subscribe((data: ApiResponse) => {
  //     console.log(data);
  //     return data;
  //   })

  //     // error: (err)=>{
  //     //   this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
  //     //     duration: 3000
  //     //   });
  //     // },
  //     // complete:()=>{}

  //   ;(await
  //     // error: (err)=>{
  //     //   this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
  //     //     duration: 3000
  //     //   });
  //     // },
  //     // complete:()=>{}
  //     this._authService.logar(usuario)).subscribe((response) => {
  //     console.log(response)
  //       if(!response.sucesso){
  //         console.log(response)

  //       }
  //   })
  // }
  async logar() {
    if (this.formLogin.invalid) return;

    var usuario = this.formLogin.getRawValue() as IUsuario;
    this._authService.logar(usuario).subscribe((data) => {
      console.log("data.StatusCode : " +data.statusCode);
      debugger
      if(data.statusCode == 200)
      {
        console.log(JSON.stringify(data.data));
        localStorage.setItem('token', JSON.stringify(data.data));
        this.router.navigate(['']);

      }
      else{
        this.snackBar.open('Falha na autenticação', data.errorMessage, {
                  duration: 3000
                });
      }

    });
  }
}
