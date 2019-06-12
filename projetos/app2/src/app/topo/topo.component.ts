import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Subject, Observable, of } from 'rxjs';

import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  public ofertas: Oferta[];
  private obserbleOfertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject();

  constructor(
    private ofertasService: OfertasService,
  ) { }

  ngOnInit() {
    this.obserbleOfertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          console.log("requisicao");
          if (termo && termo.length>0) {
            return this.ofertasService.pesquisaOfertas(termo)
          } else {
            return of<Oferta[]>([]);
          }
        }),
        catchError((err: any) => {
          console.log(err);
          return of<Oferta[]>([]);
        })
      );

    this.obserbleOfertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
      this.ofertas = ofertas;
    });
  }

  public pesquisa(termo: string): void {

    this.subjectPesquisa.next(termo);
    
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
