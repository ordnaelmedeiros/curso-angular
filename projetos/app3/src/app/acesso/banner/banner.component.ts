import { Component, OnInit, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition("escondido <=> visivel",
        animate("1s ease-in")
      )
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = "escondido";

  public imagens: Imagem[] = [
    {estado: "escondido", url: "/assets/banner-acesso/img_1.png"},
    {estado: "escondido", url: "/assets/banner-acesso/img_2.png"},
    {estado: "escondido", url: "/assets/banner-acesso/img_3.png"},
    {estado: "escondido", url: "/assets/banner-acesso/img_4.png"},
    {estado: "escondido", url: "/assets/banner-acesso/img_5.png"},
  ];

  constructor() { }

  ngOnInit() {
    this.logicaRotacao();
  }

  public logicaRotacao(): void {
    let i:number;
    for (i = 0; i < this.imagens.length; i++) {
      if (this.imagens[i].estado==="visivel") {
        this.imagens[i].estado = "escondido";
        break;
      }
    }
    i++;
    if (i >= 5) {
      i = 0;
    }
    this.imagens[i].estado = "visivel";
    setTimeout(() => this.logicaRotacao(), 3000);
  }

}
