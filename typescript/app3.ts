import Carro from "./Carro";
import Moto from "./Moto";

let carro = new Carro("veloster", 3);
carro.acelerar();
carro.acelerar();

let moto = new Moto("CG");
moto.acelerar();
moto.acelerar();

console.log(carro);
console.log(moto);