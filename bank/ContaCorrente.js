import { Cliente } from "./Cliente";
export class ContaCorrente{
    agencia;
    _cliente;// privado
    _saldo = 0;
    
    set cliente(novoValor){// verifica se a instacia de cliente é realemnte um novo cliente. 
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){// faz com que na instancializçao do index possa passar direto os valores
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;//uma variavel static para conseguir usar em todas as classes
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -=valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo +=valor;
        }
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
