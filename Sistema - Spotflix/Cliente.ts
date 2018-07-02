import { Usuario } from './Usuario';
import { Data } from './Data';
import { Produto } from './Produto';
import {CartaoDeCredito} from './CartaoDeCredito'
import { RepositorioDeProdutos } from './RepositoriosDeProdutos';

export class Cliente extends Usuario{
    private endereco : string
    private dataDeNascimento : Data
    private listaDeProdutos : Array<Produto>
    private cartaoDeCredito : CartaoDeCredito

    public constructor (nome: string, email: string, senha:string, matricula: string, 
                        endereco: string, dataDeNascimento:Data, listaDeProdutos:Array<Produto>, cartaoDeCredito:CartaoDeCredito ){

        super (nome, email, senha)
        this.endereco = endereco;
        this.dataDeNascimento = dataDeNascimento;
        this.listaDeProdutos = listaDeProdutos;
        this.cartaoDeCredito = cartaoDeCredito
    
    }

    public getEndereco() : string{
        return this.endereco;
    }

    public setEndereco (endereco: string) : void{
        this.endereco = endereco;

    }

    public getDataDeNascimento() : Data{
        return this.dataDeNascimento;
    }

    public setDataDeNascimento (dataDeNascimento: Data) : void{
        this.dataDeNascimento = dataDeNascimento;
    }
    public getListaDeProdutos() : Array<Produto>{
        return this.listaDeProdutos;
    }

    public setListaDeProdutos (listaDeProdutos: Array<Produto>) : void{
        this.listaDeProdutos = listaDeProdutos;

    }
    public getCartaoDeCredito() : CartaoDeCredito{
        return this.cartaoDeCredito;
    }

    public setCartaoDeCredito (cartaoDeCredito: CartaoDeCredito) : void{
        this.cartaoDeCredito = cartaoDeCredito;

    }

    public listarMeusProdutos() : void{
       for(let produto of this.listaDeProdutos){
           console.log(produto.getNome());

       }
    }

    public comprarProduto() : boolean{
        let preco = 0
        if(RepositorioDeProdutos.length == 0){
            return false;
        }
        else{
            for(let produto of this.listaDeProdutos){
                preco += produto.getpreco();

            }

        } return true;


    }
    public limiteDoCartao() : boolean{
        let soma = 0;
        if(RepositorioDeProdutos.length == 0){
            return false;
        }else{
            for(let produto of this.listaDeProdutos){
                soma += produto.getpreco();
                
            }
        }


        if(this.cartaoDeCredito.getLimite() >= soma){
            return true
        } else{
            return false;
        }

        // if(this.cartaoDeCredito.getLimite() > RepositorioDeProdutos)
    }

    // Se cadastrar no sistema 
    // Comprar um produto
    // Executar uma mídia
}
