import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  @Input()
  public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {}

  ngOnInit() {
    console.log(this.tentativas);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i = 0; i < this.coracoes.length; i++) {
      if (i<this.tentativas) {
        this.coracoes[i].cheio = true;
      } else {
        this.coracoes[i].cheio = false;
      }
    }
  }

}
