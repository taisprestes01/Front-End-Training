import { Conta } from "./Conta.js"; 
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0,cliente,agencia);
        /*this.agencia = agencia;
        this.cliente = cliente; Inves de declarar de novo o mesmo cliente conta, chamar da conta com super*/
        ContaCorrente.numeroDeContas += 1;//uma variavel static para conseguir usar em todas as classes
    }
      //Sobreescrevendo o metodo sacar de Conta
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
  }
