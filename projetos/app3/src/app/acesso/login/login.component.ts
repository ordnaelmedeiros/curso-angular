import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public exibirMsgLogin:boolean = false;

  @Output()
  public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    "email": new FormControl(null),
    "senha": new FormControl(null),
  });

  constructor(
    public autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit("cadastro");
  }

  public autenticar():void {
    
    this.exibirMsgLogin = false;
    this.autenticacao.autenticar(this.formulario.value.email, this.formulario.value.senha)
      .then((respsota:any) => {
          console.log(respsota);
      })
      .catch((erro:Error) => {
          this.exibirMsgLogin = true;
      });
    
  }

}
