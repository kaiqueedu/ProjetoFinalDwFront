import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioCadastroComponent } from './funcionario/funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioListagemComponent } from './funcionario/funcionario-listagem/funcionario-listagem.component';
import { ProjetoListagemComponent } from './projeto/projeto-listagem/projeto-listagem.component';
import { ProjetoCadastroComponent } from './projeto/projeto-cadastro/projeto-cadastro.component';
import { GrupoListagemComponent } from './grupo/grupo-listagem/grupo-listagem.component';
import { GrupoCadastroComponent } from './grupo/grupo-cadastro/grupo-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCadastroComponent,
    FuncionarioListagemComponent,
    ProjetoListagemComponent,
    ProjetoCadastroComponent,
    GrupoListagemComponent,
    GrupoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
