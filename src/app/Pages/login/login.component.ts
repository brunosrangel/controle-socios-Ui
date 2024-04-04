import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../service/auth.service';
import { IUsuario } from '../../Interfaces/IUsuario';
import { Router } from '@angular/router';
import { ApiResponse } from '../../Interfaces/ApiResponse';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from '../../Interfaces/JwtPayload';

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
    private router: Router,
    private cookieService: CookieService
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
  async logar() {
    if (this.formLogin.invalid) return;

    var usuario = this.formLogin.getRawValue() as IUsuario;
    this._authService.logar(usuario).subscribe((data) => {
      console.log("data.StatusCode : " +data.statusCode);
      debugger
      if(data.statusCode == 200)
      {
        console.log(JSON.stringify(data.data));
        console.log(jwtDecode<JwtPayload>(data.data.toString()));
        var tokenDecode = jwtDecode<JwtPayload>(data.data.toString());

        this.cookieService.set('token', data.data.toString(), tokenDecode.exp);
        this.cookieService.set('nomeUsuario', tokenDecode.nomeUsuario, tokenDecode.exp);
        this.cookieService.set('login', tokenDecode.login, tokenDecode.exp);
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
