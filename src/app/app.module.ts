import { IService } from './service/generic/servico/iservico-generico.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importe BrowserAnimationsModule aqui
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrincipalComponent } from './Pages/Compartilhado/Principal/principal.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './Pages/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';




// Paginas de cadastro
import { CadastroEntidadeComponent } from './Pages/cadastro/cadastroentidade/cadastro-entidade.component';
import { TokenInterceptor } from './service/interceptors/token.interceptor';
import { LoginComponent } from './Pages/login/login.component';

//Cadastro de Modulos de Caixa de dialogo
import { DialogComponent } from './Pages/cadastro/cadastroentidade/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CadastroUsuarioComponent } from './Pages/cadastro/Usuario/cadastro-usuario/cadastro-usuario.component';
import { GenericRepository } from './service/generic/repositorio/repositorio-generico.service';
import { MatOption } from '@angular/material/core';
import { EscolaridadeUsuarioModel } from './Interfaces/UsuarioModel';
import { GenericService } from './service/generic/servico/servico-generico.service';
import { MatSelect } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    PrincipalComponent,
    DashboardComponent,
    CadastroEntidadeComponent,
    DialogComponent,
    CadastroUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Adicione BrowserAnimationsModule aqui
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatListModule,
    MatMenuModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatOption,
    MatSelect

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: 'IRepositoryToken', useClass: GenericRepository },
    {provide : 'IService', useClass: GenericService }


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
