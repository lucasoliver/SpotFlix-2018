import {Video} from './Video';

export class Series extends Video{
    private numeroDeEpisodios : number;
    private duracaoMediaDeEpsodio : number;

    public constructor ( codigo:string, nome:string, genero:string, preco:number, 
                        anoLocamento:number, faixaEtaria:number, numeroDeEpisodios : number, duracaoMediaDeEpsodio : number  ){
        
         super (codigo,nome, genero,preco,anoLocamento,faixaEtaria)
         this.numeroDeEpisodios = numeroDeEpisodios;
         this.duracaoMediaDeEpsodio = duracaoMediaDeEpsodio;
         
        }

        public getNumeroDeEpisodios() : number{
            return this.numeroDeEpisodios;
        }
    
        public setNumeroDeEpisodios( numeroDeEpisodios : number) : void{
            this.numeroDeEpisodios = numeroDeEpisodios;

        }

        public getDuracaoMediaDeEpsodio() : number{
            return this.duracaoMediaDeEpsodio;
        }
    
        public setDuracaoMediaDeEpsodio( duracaoMediaDeEpsodio : number) : void{
            this.numeroDeEpisodios = duracaoMediaDeEpsodio;
        }

        public executar() : void{
            console.log("Executando: ");
        }

}