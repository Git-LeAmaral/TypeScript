"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
/* --- Criar carros --- */
let carroA = new Carro_1.default('Gol GTS', 2);
let carroB = new Carro_1.default('Ford Fusion', 4);
let carroC = new Carro_1.default('Corolla', 4);
let carroD = new Carro_1.default('Onix', 4);
/* --- Montar lista de carros da Concessionaria --- */
let listaDeCarros = [carroA, carroB, carroC, carroD];
/* --- Instanciando a classe concessionaria --- */
let concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* --- Exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros());
/* --- Comprar o carro --- */
let cliente = new Pessoa_1.default('Leandro', 'Gol GTS');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
