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

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './navegation/header/header.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCadastroComponent,
    FuncionarioListagemComponent,
    ProjetoListagemComponent,
    ProjetoCadastroComponent,
    GrupoListagemComponent,
    GrupoCadastroComponent,    
    HeaderComponent, 
    HomeComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,    
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule   
  ]
    ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
