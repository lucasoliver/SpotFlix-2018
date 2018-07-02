import {Produto} from './Produto';

export abstract class Video extends Produto{
    private anoLocamento : number;
    private faixaEtaria : number;

    public constructor ( codigo:string, nome:string, genero:string, preco:number, 
                        anoLocamento:number, faixaEtaria:number ){
        super (codigo,nome, genero,preco);
        this.anoLocamento = anoLocamento;
        this. faixaEtaria = faixaEtaria;

        
    }

    public getanoLocamento() : number{
        return this.anoLocamento;
    }

    public setanoLocamento( anoLocamento : number) : void{
        this.anoLocamento = anoLocamento;
    }

    public getfaixaEtaria() : number{
        return this.faixaEtaria;
    }

    public setfaixaEtariao( faixaEtaria : number) : void{
        this.faixaEtaria = faixaEtaria;
    }
    public executar() : void{
        console.log("Executando: ");
        
    }
}

