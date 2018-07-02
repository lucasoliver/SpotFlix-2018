export abstract class Produto {
    private codigo : string;
    private nome : string;
    private genero : string;
    private preco : number;

    public constructor ( codigo:string, nome:string, genero:string, preco:number){
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero;
        this.preco = preco; 
    }

    public getCodigo() : string{
        return this.codigo;
    }

    public setCodigo( codigo : string) : void{
        this.codigo = codigo;
    }

    public getNome() : string{
        return this.nome;
    }

    public setNome( nome : string) : void{
        this.nome = nome;
    }

    public getGenero() : string{
        return this.genero;
    }

    public setGenero( genero : string) : void{
        this.genero = genero;
    }

    public getpreco(): number{
         return this.preco;

    }

    public setpreco( preco : number) : void{
        this.preco = preco;

    }
    
}