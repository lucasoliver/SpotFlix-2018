import { Data } from "./Data";
import {RepositorioDeProdutos} from "./RepositoriosDeProdutos";

export class CartaoDeCredito{
    private numero: string;
    private validade: Data;
    private codigoCCV: number;
    private limite: number;

    public constructor (numero: string, validade: Data, codigoCCV: number, limite: number){
        this.numero = numero;
        this.validade = validade;
        this.codigoCCV = codigoCCV;
        this.limite = limite;
    }

    public getNumero() : string{
        return this.numero;
    }

    public setNumero (numero: string) : void{
        this.numero = numero;

    }

    public getValidade() : Data{
        return this.validade;
    }

    public setValidade (validade: Data) : void{
        this.validade = validade;

    }

    public getCodigoCCV() : number{
        return this.codigoCCV;
    }

    public setCodigoCCV (codigoCCV: number) : void{
        this.codigoCCV = codigoCCV;
    }
    
    public getLimite() : number{
        return this.limite;
    }

    public setLimite (limite: number) : void{
        this.limite = limite;
    }
    
}