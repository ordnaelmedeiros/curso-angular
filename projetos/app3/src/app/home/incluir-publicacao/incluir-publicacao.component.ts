import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as firebase from 'firebase'

import { Bd } from '../../bd.service'
import { Progresso } from '../../progresso.service'

import { Observable, Subject, interval } from 'rxjs'
import { combineLatest, takeUntil } from "rxjs/operators";
//import 'rxjs/Rx'


@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string
  private imagem: any

  public progressoPublicacao: string = 'pendente'
  public porcentagemUpload: number

  @Output()
  public atualizarTimeLine: EventEmitter<any> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
    private bd: Bd,
    private progresso: Progresso
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    })

    let continua = new Subject()
    continua.next(true)

    interval(500)
      .pipe(
        takeUntil(continua)
      ).subscribe(() => {
        //console.log(this.progresso.status)
        //console.log(this.progresso.estado)
        this.progressoPublicacao = 'andamento'
        if (this.progresso && this.progresso.estado) {
          this.porcentagemUpload = Math.round(( this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes ) * 100)
          
          if(this.progresso.status === 'concluido') {
            this.progressoPublicacao = 'concluido'
            this.atualizarTimeLine.emit();
            continua.next(false)
          }
        }
      })


    /*
    let acompanhamentoUpload = Observable.interval(1500)

    let continua = new Subject()

    continua.next(true)
    
    acompanhamentoUpload
      .takeUntil(continua)
      .subscribe(() => {
        //console.log(this.progresso.status)
        //console.log(this.progresso.estado)
        this.progressoPublicacao = 'andamento'

        this.porcentagemUpload = Math.round(( this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes ) * 100)
        
        if(this.progresso.status === 'concluido') {
          this.progressoPublicacao = 'concluido'
          continua.next(false)
        }
      })
      */
  }

  public preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files
  }

}
