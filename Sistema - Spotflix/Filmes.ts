import {Video} from './Video';

export class Filmes extends Video{
    private duracao : number;

    public constructor ( codigo:string, nome:string, genero:string, preco:number, 
                        anoLocamento:number, faixaEtaria:number, duracao:number){
        super (codigo,nome, genero,preco,anoLocamento,faixaEtaria)
        this.duracao = duracao;
        
    }

    public getDuracao() : number{
        return this.duracao;
    }

    public setDuracao(duracao: number){
        this.duracao = duracao;
    }

    public executar() : void{
        console.console.log(("Executando: "));
        
        
    }


}