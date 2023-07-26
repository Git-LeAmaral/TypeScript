import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

/* --- Criar carros --- */

let carroA = new Carro('Gol GTS', 2)
let carroB = new Carro('Ford Fusion', 4)
let carroC = new Carro('Corolla', 4)
let carroD = new Carro('Onix', 4)

/* --- Montar lista de carros da Concessionaria --- */

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroD]

/* --- Instanciando a classe concessionaria --- */
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- Exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros());

/* --- Comprar o carro --- */
let cliente = new Pessoa('Leandro', 'Gol GTS')
// console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {

        //Comprar o carro
        cliente.comprarCarro(carro)
    }
    
}) 

console.log(cliente.dizerCarroQueTem());
