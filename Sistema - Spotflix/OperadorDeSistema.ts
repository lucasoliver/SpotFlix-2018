import { Funcionario } from './Funcionario';
import { Produto } from './Produto';
import { Cliente } from './Cliente';
import { Video } from './Video';
import { Filmes } from './Filmes';
import { Series } from './Series';
import { Podcast } from './Podcast';
import { Musica } from './Musica';
import { Pacote } from './Pacote';
import { Data } from './Data';

export class OperadorDeSistema extends Funcionario{
    

    public constructor (nome: string, email: string, senha:string, matricula: string,salario: number){
        super (nome, email, senha, matricula, salario);
    }

    // public adicionarProduto ( Produto: Produto) : void { 
    //     this.produtos!.push(Produto);
    // }

    // public adicionarFilmes ( codigo:string, nome:string, genero:string, preco:number, 
    //     anoLocamento:number, faixaEtaria:number, duracao:number) : void {

    //     let filme = new Filmes (codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao)
    //     this.filmes!.push(filme)
    //     this.adicionarProduto(filme);       
    // }

    // public adicionarSeries ( codigo:string, nome:string, genero:string, preco:number, 
    //     anoLocamento:number, faixaEtaria:number, numeroDeEpisodios : number, duracaoMediaDeEpisodio : number ) : void {

    //     let serie = new Series (codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpisodio);
    //     this.series!.push (serie);
    //     this.adicionarProduto(serie);
    // }

    // public adicionarMusica ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, album:string) : void {
    //     let musica = new Musica ( codigo, nome, genero, preco, autor, duracao, album);
    //     this.musicas!.push (musica);
    //     this.adicionarProduto (musica);
    // }

    // public adicionarPodcast ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, tematica:string) : void {
    //     let podcast = new Podcast ( codigo, name, genero, preco, autor, duracao, tematica);
    //     this.podcasts!.push ( podcast);
    //     this.adicionarProduto (podcast);
    // }

    // public adicionarPacote ( codigo:string, nome:string, genero:string, preco:number, 
    //     produtos:Array<Produto>, validade: Data, precoDeProtudos:number) : void {

    //     let pacote = new Pacote (codigo, nome, genero,preco, produtos, validade, precoDeProtudos);
    //     this.pacote!.push ( pacote);
    //     this.adicionarProduto (pacote);
    // }

    // public removerProduto ( codigo:string ) {
    //     for(let i = 0; i < this.produtos!.length; i++){
    //         if(this.produtos![i].getCodigo() === codigo){
    //             this.produtos!.splice(i, 1);
    //             if(this.produtos![i] instanceof Filmes){
    //                 for(let j = 0; j < this.filmes!.length; j++){
    //                     if(this.produtos![i].getCodigo() === this.filmes![j].getCodigo()){
    //                         this.filmes!.splice(j, 1);
    //                     }
    //                 }
    //             }
    //             else if(this.produtos![i] instanceof Series){
    //                 for(let j = 0; j < this.series!.length; j++){
    //                     if(this.produtos![i].getCodigo() === this.series![j].getCodigo()){
    //                         this.series!.splice(j, 1);
    //                     }
    //                 }
    //             }
    //             else if(this.produtos![i] instanceof Musica){
    //                 for(let j = 0; j < this.musicas!.length; j++){
    //                     if(this.produtos![i].getCodigo() === this.musicas![j].getCodigo()){
    //                         this.musicas!.splice(j, 1);
    //                     }
    //                 }
    //             }
    //             else if(this.produtos![i] instanceof Podcast){
    //                 for(let j = 0; j < this.podcasts!.length; j++){
    //                     if(this.produtos![i].getCodigo() === this.podcasts![j].getCodigo()){
    //                         this.podcasts!.splice(j, 1);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // public listarProdutos () : Array<Produto>{
    //     return this.produtos!;
    // }

    // public listarProdutoPorCodigo ( codigo:string ){
    //     for(let i = 0; i < this.produtos!.length; i++){
    //         if(this.produtos![i].getCodigo() === codigo){
    //             return this.produtos![i];
    //         }
    //     }
    // }

    // public listarClientes () : Array<Cliente>{
    //     return this.clientes!;
    // }

    // public listarClientePorEmail ( email:string ){
    //     for(let i = 0; i < this.clientes!.length; i++){
    //         if(this.clientes![i].getEmail() === email){
    //             return this.clientes![i];
    //         }
    //     }
    // }
    // Adicionar Produtos
    // Remover Produtos
    // Listar os Clientes e Produtos
    // Procurar Cliente e Produto por email ou codigo
}

// console.log ("tá rodando")
// let filme = [new Filmes ("0001", "Era do gelo", "aventura", 1, 2011, 12, 90)];

// let serie = [new Series ("002", "gameofthrones", "aventura", 20, 2018, 18, 50, 45, )]
// let musica = [new Musica ("003", "mar eu", "MPB", 10, "Iracemas", 2, "Plurisom")]
// let podcast = [new Podcast("004", "AULADEPOO", "Educação", 100, "Anderson", 10, "trabalhofinal")]

// let data = new Data (19,12,2018);
// console.log(filme)
// let pacote = [new Pacote ("888", "sóterro","terro", 200,  data, 20, filme)]

// console.log(pacote[0].getProdutos());