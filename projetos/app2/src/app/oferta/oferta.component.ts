import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService,
    CarrinhoService
  ]
})
export class OfertaComponent implements OnInit {

  public oferta:Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {

    console.log(this.carrinhoService.exibirItens());

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta:Oferta) => {
          this.oferta = oferta;
        });
    });

    /*
    let id: string = this.route.snapshot.params['id'];
    
    this.ofertasService.getOfertaPorId(id)
      .then((oferta:Oferta) => {
        this.oferta = oferta;
      });
      */
  }

  public adicionarItemCarrinho(): void {

    if (this.oferta) {
      
      this.carrinhoService.incluirItem(this.oferta);

    }

  }

}
