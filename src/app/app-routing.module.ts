import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCadastroComponent } from './funcionario/funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioListagemComponent } from './funcionario/funcionario-listagem/funcionario-listagem.component';
import { GrupoCadastroComponent } from './grupo/grupo-cadastro/grupo-cadastro.component';
import { GrupoListagemComponent } from './grupo/grupo-listagem/grupo-listagem.component';
import { HomeComponent } from './home/home.component';
import { ProjetoCadastroComponent } from './projeto/projeto-cadastro/projeto-cadastro.component';
import { ProjetoListagemComponent } from './projeto/projeto-listagem/projeto-listagem.component';
import { SetorCadastroComponent } from './setor/setor-cadastro/setor-cadastro.component';
import { SetorListagemComponent } from './setor/setor-listagem/setor-listagem.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'funcionario-listagem', component: FuncionarioListagemComponent },
  { path: 'funcionario-cadastro', component: FuncionarioCadastroComponent },
  { path: 'grupo-listagem', component: GrupoListagemComponent },
  { path: 'grupo-cadastro', component: GrupoCadastroComponent },
  { path: 'projeto-listagem', component: ProjetoListagemComponent },
  { path: 'projeto-cadastro', component: ProjetoCadastroComponent },
  { path: 'setor-listagem', component: SetorListagemComponent },
  { path: 'setor-cadastro', component: SetorCadastroComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule,    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
