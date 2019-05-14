import Veiculo from "./Veiculo";

class Moto extends Veiculo {

    constructor (modelo: string) {
        super();
        this.modelo = modelo;
    }

    public acelerar(): void {
        this.velocidade += 20;
    }

}

export default Moto;