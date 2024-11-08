class data{
    dia:number
    mes:number
    ano:number

    constructor(dia:number = 1, mes:number = 1, ano:number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new data(2,9,2002)
console.log(aniversario)

const casamento = new data
casamento.mes = 3
console.log(casamento)

// MELHORANDO

class dataEx{
    constructor( public dia:number = 1, public mes:number = 1, public ano:number = 1970){}
}

const aniversarioEx = new dataEx(29,6,1999)
console.log(aniversarioEx)

const casamentoEx = new dataEx
casamentoEx.mes = 9
console.log(casamentoEx)

//Desafio
//Atributos: nome, preço e desconto
//Criar o construtor
//valor padrao desconto 0
//Criar 2 produtos

class produtos{
    constructor(public nome:string = 'teste', public preco: number = 0, public desconto: number = 0){}

    public Des(){
        if(this.desconto>0){
            this.desconto = this.preco-(this.desconto*this.preco)
        }
    }

    public Res():string{
        this.Des()
        if(this.desconto>0){
        return `${this.nome} custa R$${this.preco} e preço após o desconto é ${this.desconto}.`
        } else {return `${this.nome} custa R$${this.preco}.`}
    }
}

let Processador = new produtos('Processador',450,0.25)
console.log(Processador.Res())

let Memoria = new produtos('Memoria',200,0.2)
console.log(Memoria.Res())

const Gabinete = new produtos
Gabinete.nome = 'Gabinete'
Gabinete.preco = 450
Gabinete.desconto = 0
console.log(Gabinete.Res())