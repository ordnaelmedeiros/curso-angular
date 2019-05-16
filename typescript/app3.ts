import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from "./Concessionaria";
import { ConcessionariaInterface } from "./ConcessionariaInterface";

let carro = new Carro("veloster", 3);
carro.acelerar();
carro.acelerar();

let moto = new Moto("CG");
moto.acelerar();
moto.acelerar();

console.log(carro);
console.log(moto);

let concessionaria:ConcessionariaInterface = new Concessionaria('', []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
