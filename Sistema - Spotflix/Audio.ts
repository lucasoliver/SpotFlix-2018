import {Produto} from './Produto';

export abstract class Audio extends Produto{
    private autor : string;
    private duracao : number;

    public constructor (codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number){
        super (codigo, nome, genero, preco);
        this.autor = autor;
        this.duracao = duracao;

    }

    public getAutor() : string{
        return this.autor;
    }

    public setAutor(autor: string) : void{
        this.autor = autor;
    }

    public getDuracao() : number{
        return this.duracao;
    }

    public setDuracao(duracao: number) : void{
        this.duracao = duracao;
    }

    public executar() : void{
        console.log("Executando: ");

    }
}



