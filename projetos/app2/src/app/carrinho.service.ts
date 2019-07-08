import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {

    private itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {

        let item: ItemCarrinho = new ItemCarrinho(
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

export default CarrinhoService;