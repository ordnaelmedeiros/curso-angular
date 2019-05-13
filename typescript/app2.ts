class Carro {

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor (modelo: string, numeroSePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroSePortas;
    }

    public acelerar(): void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }

}

let carro: Carro = new Carro('Polo', 5);
console.log(carro);

carro.acelerar();
console.log(carro);

carro.acelerar();
carro.acelerar();
console.log(carro);