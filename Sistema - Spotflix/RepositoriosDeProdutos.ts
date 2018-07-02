import { Produto } from './Produto';
import { Filmes } from './Filmes';
import { Series } from './Series'
import { Musica } from './Musica';
import { Podcast } from './Podcast';
import { Pacote } from './Pacote';
import { Data } from './Data';


export class RepositorioDeProdutos {
    mapaProdutos : Map<string, Produto>;
    mapaFilmes: Map<string, Filmes>;
    mapaSeries: Map<string, Series>;
    mapaMusicas: Map<string, Musica>;
    mapaPodcasts: Map<string, Podcast>;
    mapaPacotes: Map<string, Pacote>;

public constructor(){
    this.mapaProdutos = new Map<string, Produto>();
    this.mapaFilmes = new Map<string, Filmes>();
    this.mapaSeries = new Map<string, Series>();
    this.mapaMusicas = new Map<string, Musica>();
    this.mapaPodcasts = new Map<string, Podcast>();
    this.mapaPacotes = new Map<string, Pacote>();

}

public adicionarProduto ( codigo:string, Produto: Produto) : void { 
    this.mapaProdutos.set(codigo, Produto);
}

public adicionarFilme ( codigo:string, nome:string, genero:string, preco:number, 
    anoLocamento:number, faixaEtaria:number, duracao:number) : void {

    let filme = new Filmes (codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao);
    this.mapaFilmes.set(codigo, filme);
    this.adicionarProduto(codigo, filme);
}

public adicionarSerie ( codigo:string, nome:string, genero:string, preco:number, 
    anoLocamento:number, faixaEtaria:number, numeroDeEpisodios : number, duracaoMediaDeEpisodio : number ) : void {

    let serie = new Series (codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpisodio);
    this.mapaSeries.set(codigo, serie);
    this.adicionarProduto(codigo, serie);
}

public adicionarMusica ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, album:string) : void {
    let musica = new Musica ( codigo, nome, genero, preco, autor, duracao, album);
    this.mapaMusicas.set(codigo, musica);
    this.adicionarProduto(codigo, musica);
}

public adicionarPodcast ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, tematica:string) : void {
    let podcast = new Podcast ( codigo, nome, genero, preco, autor, duracao, tematica);
    this.mapaPodcasts.set(codigo, podcast);
    this.adicionarProduto(codigo, podcast);
}

public adicionarPacote ( codigo:string, nome:string, genero:string, preco:number, 
    produtos:Array<Produto>, validade: Data, precoDeProtudos:number) : void {

    let pacote = new Pacote (codigo, nome, genero, preco, produtos, validade, precoDeProtudos);
    this.mapaPacotes.set(codigo, pacote);
    this.adicionarProduto(codigo, pacote);
}

public listarProdutos (){
    this.mapaProdutos.forEach( (valor, chave) => {
        console.log(valor);
    });
}

public procurarProduto ( codigo:string ){
    if(this.mapaProdutos.has(codigo)){
        console.log(this.mapaProdutos.get(codigo));
    }
    else console.log("Produto não encontrado");
}

public removerProduto (codigo: string) : boolean{
    if (!this.mapaProdutos.has(codigo)){
        return false;
    }

    this.mapaProdutos.delete(codigo);
    return true;

}

// public listarProdutos() : Array<Produto>{
//     let produto : Array<Produto> = [];
//     for (let codigo of this.mapaProdutos.values()){
//         if (codigo instanceof Produto){
//             produto.push(codigo);
//         }
//     }

//     return produto;
// }

// public procurarProduto (codigo : string){
//     for (let produto of this.mapaProdutos.values()){
//         if (produto instanceof Produto && produto.getCodigo() == codigo){
//             return produto;
//         }
//     }
//     // return null;
// }



}