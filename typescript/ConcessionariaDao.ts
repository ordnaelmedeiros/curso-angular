import DaoInterface from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDao implements DaoInterface<Concessionaria> {

    nomeTabela: string = "tb_concessionaria";
    
    inserir(object: Concessionaria): boolean {
        console.log('lógica insert');
        return true;
    }
    atualizar(object: Concessionaria): boolean {
        console.log('lógica update');
        return true;
    }
    remover(id: number):Concessionaria {
        console.log('lógica update');
        return new Concessionaria('', []);
    }
    selecionar(id: number):Concessionaria {
        console.log('lógica selecionar');
        return new Concessionaria('', []);
    }
    selecionarTodos(): Concessionaria[] {
        console.log('lógica selecionar todos');
        return [new Concessionaria('',[])];
    }

}