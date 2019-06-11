import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Subject, Observable } from 'rxjs';

//import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject();



  constructor(
    private ofertasService: OfertasService,
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      // error TS2339: Property 'switchMap' does not exist on type 'Subject<string>'.
      .switchMap((termo: any) => {
        return this.ofertasService.pesquisaOfertas(termo)
      })

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaBusca: string): void {

    this.subjectPesquisa.next(termoDaBusca);

    /*
    this.ofertasService.pesquisaOfertas(termoDaBusca)
      .subscribe(
        (ofertas: Oferta[]) => console.log(ofertas),
        (erro: any) => console.log('Erro status: ', erro.status),
        () => console.log('Fluxo de eventos completo')
      )
      */
  }

}
