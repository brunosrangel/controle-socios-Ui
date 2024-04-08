import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UsuarioNaoAutenticadoGuard } from './service/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './service/guards/usuario-autenticado.guard';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './Pages/Compartilhado/Principal/principal.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CadastroEntidadeComponent } from './Pages/cadastro/cadastroentidade/cadastro-entidade.component';
import { CadastroUsuarioComponent } from './Pages/cadastro/Usuario/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'entidades',
        component: CadastroEntidadeComponent,
        canActivate: [UsuarioAutenticadoGuard],
      },
      {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent,
        canActivate: [UsuarioAutenticadoGuard],
      }

    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
