import Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';
 
/* --- criar carros ---- */
let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 3);
let carroC = new Carro('cerato', 5);

/* --- montar lista de carros da concessionaria ---- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC];
let concessionaria = new Concessionaria("Av. Brasil", listaDeCarros);

/* --- exibir lista de carros ---- */
//console.log(concessionaria.mostrarListaDeCarros());

/* --- comprar o carro --- */
let cliente = new Pessoa("João", "veloster");

concessionaria.mostrarListaDeCarros().map(carro => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());