import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../acesso/autenticacao.service';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacaoes')
  public publicacaoes: PublicacoesComponent;

  constructor(
    private autenticacao:Autenticacao
  ) { }

  ngOnInit() {
  }

  public sair():void {
    this.autenticacao.sair();
  }

  public atualizarTimeLine(): void {
    this.publicacaoes.atualizarTimeLine();
  }

}
