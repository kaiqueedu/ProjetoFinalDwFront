import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetorListagemComponent } from './setor-listagem/setor-listagem.component';
import { SetorCadastroComponent } from './setor-cadastro/setor-cadastro.component';



@NgModule({
  declarations: [
    SetorListagemComponent,
    SetorCadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SetorModule { }
