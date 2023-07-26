import { ConcessionariaInterface } from './concessionariaInterface'
import Carro from "./Carro"

export default class Concessionaria implements ConcessionariaInterface {

    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    } 

    public fonecerEndereco() {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'De Segunda a Sexta das 08:00 as 18:00 e Sábdado das 08:00 as 12:00'
    }

}