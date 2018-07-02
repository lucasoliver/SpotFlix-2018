import {Produto} from "./Produto";
import { Data } from "./Data";
import { Video } from './Video';
import {Filmes} from './Filmes';
import {Series} from './Series';
import {Podcast} from './Podcast';
import {Musica} from './Musica';



export class Pacote extends Produto{
   
    private  filmes?: Array<Filmes>; 
    private  series?: Array<Series>;
    private  musica?: Array<Musica>;
    private  podcast?: Array<Podcast>; 
    private produtos: Array<Produto>;

    private validade : Data;
    private precoDeProtudos : number;

    public constructor ( codigo:string, nome:string, genero:string, preco:number, produtos:Array<Produto>, validade: Data, precoDeProtudos:number,
                        
                        filmes?: Array<Filmes>, 
                        series?: Array<Series>, 
                        musica?: Array<Musica>, 
                        podcast?: Array<Podcast>
                      ) {
        
        super (codigo, nome, genero, preco);
        this.filmes = filmes;
        this.series = series;
        this.musica = musica;
        this.podcast = podcast;
        
        this.produtos = produtos;
        this.validade = validade;
        this.precoDeProtudos = precoDeProtudos;
    
    }

    public getProdutos(): Array<Produto>{
        return this.produtos;

    }

    public setProdutos(produtos : Array<Produto> ) : void{
        this.produtos = produtos;

    }

    public getValidade() : Data{
        return this.validade;
    }

    public setValidade(validade: Data) : void{
        this.validade = validade;
    }

    public getPrecoDeProtudos () : number{
        return this.precoDeProtudos;
    }

    public setPrecoDeProtudos ( precoDeProtudos: number) : void{
        this.precoDeProtudos = precoDeProtudos;
    }

    
    public executar():  void{
    }
    ///Colocando Bonificação por Preco de Produto.
    public valorMensal(precoDeProdutos: number): number{
        return this.precoDeProtudos*0.15;
    }

}