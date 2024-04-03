
import { UsuarioNaoAutenticadoGuard } from './service/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './service/guards/usuario-autenticado.guard';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { PrincipalComponent } from './Pages/Compartilhado/Principal/principal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {
    path: '', component: PrincipalComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: HomeComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
