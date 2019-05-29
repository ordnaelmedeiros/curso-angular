import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import Frase from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
 
  public instrucao: string = "Traduza a frase:";
  public frases: Frase[] = FRASES;
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.rodada = 0;
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    //console.log("Removido");
  }


  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value;
    //console.log("-> " + this.resposta);
  }

  public verificarResposta(): void {
    //console.log("Verificar resposta: ", this.resposta);
    if (this.rodadaFrase.frasePtBr.toLocaleLowerCase() == this.resposta.toLocaleLowerCase()) {
      alert("Atradução está correta");
      this.proximaRodada();
    } else {
      // errou
      //alert("A tradução está errada");
      this.resposta = '';
      this.tentativas--;

      if (this.tentativas<0) {
        //alert("Você perdeu todas as tentativas");
        this.encerrarJogo.emit("derrota");
      }
    }
    
  }

  private proximaRodada():void {
    if (this.rodada==3) {
      //alert("Você concluiu as traduções com sucesso");
      this.encerrarJogo.emit("vitoria");
    } else {
      this.resposta = '';
      this.progresso = this.progresso + (100 / this.frases.length);
      this.rodada ++;
      this.rodadaFrase = this.frases[this.rodada];
    }
  }

}
