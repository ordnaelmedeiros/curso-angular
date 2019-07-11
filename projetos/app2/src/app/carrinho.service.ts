import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {

    private itens: ItemCarrinho[] = [];


    public limparCarrinho() {
        this.itens = [];
    }

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {

        let item: ItemCarrinho = this.itens.find(i => i.id === oferta.id);
        if (item) {
            item.quantidade += 1;
        } else {
            item = new ItemCarrinho(
                oferta.id,
                oferta.imagens[0],
                oferta.titulo,
                oferta.descricao_oferta,
                oferta.valor,
                1
            )
            this.itens.push(item);
        }
    }

    public valorTotal(): number {
        return this.itens.reduce(function(acumulador, valorAtual) {
            return acumulador + (valorAtual.quantidade * valorAtual.valor);
        }, 0);
    }

    public totalItens(): number {
        return this.itens.length;
    }

    public adicinarQuantidade(item: ItemCarrinho) {

        let itemCarrinho: ItemCarrinho = this.itens.find(i => i.id === item.id);
        if (itemCarrinho) {
            itemCarrinho.quantidade += 1;
        }

    }

    public removerQuantidade(item: ItemCarrinho) {

        let itemCarrinho: ItemCarrinho = this.itens.find(i => i.id === item.id);
        
        if (itemCarrinho) {

            itemCarrinho.quantidade -= 1;

            if (itemCarrinho.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemCarrinho), 1);
            }
    
        }
        
    }

}

export { CarrinhoService };