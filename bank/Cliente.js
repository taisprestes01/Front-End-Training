export class Cliente{
    nome;
    cpf;


    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){//quanto instanciar o cliente vai pedir esses 2 parametros
        this.nome = nome;
        this.cpf = cpf;
    }
}