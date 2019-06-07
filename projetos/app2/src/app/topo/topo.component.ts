import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  constructor(
    private ofertasService: OfertasService,
  ) { }

  ngOnInit() {
  }

  public pesquisa(textotermoDaBusca: string): void {
    this.ofertasService.pesquisaOfertas(textotermoDaBusca)
      .subscribe(
        (ofertas: Oferta[]) => {
          console.log(ofertas)
        }
      )
  }

}
