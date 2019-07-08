import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import CarrinhoService from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService, CarrinhoService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra:number;

  public formulario:FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    'complemento': new FormControl(null, []),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    let itens: ItemCarrinho[] = this.carrinhoService.exibirItens();
    console.log(itens);
  }

  public confirmarCompra(): void {
    if (this.formulario.invalid) {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    } else {
      let pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento
        );
      this.ordemCompraService.efetivarCompra(pedido).subscribe(
        (idPedido:number) => {
          this.idPedidoCompra = idPedido;
          console.log('Id do Pedido: ' + this.idPedidoCompra);
        }
      );
      
    }
  }
}
