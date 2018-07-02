export abstract class Usuario {
    private nome : string;
    private email : string;
    private senha : string;

    public constructor (nome: string, email: string, senha:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    
    }
    
    public getNome() : string{
        return this.nome;
    }

    public setNome(nome : string) : void{
        this.nome = nome;
    }

    public getEmail() : string{
        return this.email;
    }

    public setEmail(email: string) : void{
        this.email = email;
        
    }

    public getSenha() : string{
        return this.senha;
    }

    public setSenha(senha : string) : void{
        this.senha = senha;

    }
}