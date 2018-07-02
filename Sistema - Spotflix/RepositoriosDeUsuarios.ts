import { Usuario } from "./Usuario";
import { Cliente } from './Cliente';
import { OperadorDeSistema } from './OperadorDeSistema';
import { Funcionario } from './Funcionario';
import { Gerente } from "./Gerente";

export class RepositorioDeUsuario{
    public operadores : Array<OperadorDeSistema>;
    private mapadeusuario : Map<string,Usuario>;
    public clientes  : Array<Cliente>;
    public  usuarios : Array<Usuario>;

    public constructor(){
     this.clientes = new Array<Cliente>();
     this.mapadeusuario  = new Map<string, Usuario>();
     this.operadores = new Array<OperadorDeSistema>();
    
     //TODO MUNDO
     this.usuarios = new Array<Usuario>();

    }
    public procurarUsuarioLogado(email: string) : Usuario | null {
        for(let usuario of this.usuarios){
            if(usuario.getEmail() == email){
                if(usuario instanceof Gerente || usuario instanceof Cliente || usuario instanceof OperadorDeSistema){
                    return usuario;
                }
            }
        }

        return null;
    }

    public removerOperador(email: string):boolean{
        for(let i = 0; i < this.usuarios.length; i++){
            if(this.usuarios[i].getEmail() == email){
                this.usuarios.splice(i, 1);
                for(let j = 0; j < this.operadores.length; j++){
                    if(this.operadores[j].getEmail() == email){
                        this.operadores.splice(j, 1);
                    }
                }
                console.log("Operador removido");
                return true;
            }
        }
        console.log("Operador não encontrado!");
        return false; 
    }


    public listarClientes(): Array<Cliente>{
        console.log(this.clientes);
        return this.clientes;



    }

       
        // for(let usuario of this.mapadeusuario.values()){
        //     if(usuario instanceof Cliente){
        //         this.clientes.push(usuario);

        //     }
        // } 
        // return this.clientes;

    
/*
    public listarOperadores() : Array<Funcionario>{
        for(let funcionario of this.mapadeusuario.values()){
            if(funcionario instanceof OperadorDeSistema){
                this.operadores.push(funcionario);
            }
        }return this.operadores;
        
    }
    */
   public listarOperadores() : Array<OperadorDeSistema>{
       console.log(this.operadores);
        return this.operadores;
    }

    public procurarCliente(email : string) : Cliente |null{
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Cliente && usuario.getEmail()== email){
                return usuario;
            }
        }
        return null;



    }

    /*
    public adicionarOperador ( nome: string, email: string, senha: string, matricula:string, salario: number) : OperadorDeSistema{  
        
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);

        let operacao: OperadorDeSistema = new OperadorDeSistema (nome, email, senha, matricula, salario);
        this.operadores.push(operacao);
        return operacao;

    }*/

    public adicionarOperador (op:OperadorDeSistema) : void {  
        
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);
        //console.log(op.getEmail());
        this.operadores.push(op);
       // return op;

    }
    
    public usuarioLogin(email : string, senha : string) : Usuario | null{
        for(let usuario of this.usuarios){
            if(usuario.getEmail() == email && usuario.getSenha() ==  senha){
                return usuario;


            }
        } return null;
    }
    

    

}