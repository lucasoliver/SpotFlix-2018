"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var RepositoriosDeProdutos_1 = require("./RepositoriosDeProdutos");
var RepositoriosDeUsuarios_1 = require("./RepositoriosDeUsuarios");
var OperadorDeSistema_1 = require("./OperadorDeSistema");
var Gerente_1 = require("./Gerente");
var CartaoDeCredito_1 = require("./CartaoDeCredito");
var Filmes_1 = require("./Filmes");
var Series_1 = require("./Series");
var readline = require('readline-sync');
var comando;
// let comando:number;
// let usuarioLogado : Usuario | undefined = undefined;
// let repositorioDeUsuario : RepositorioDeUsuario = new RepositorioDeUsuario();
var repositorioDeProdutos = new RepositoriosDeProdutos_1.RepositorioDeProdutos();
var repositorioDeUsuario = new RepositoriosDeUsuarios_1.RepositorioDeUsuario();
// let gerente:Gerente = new Gerente("lugas","l@gas","1234","377843", 10, [], []);
// repositorioDeUsuario.usuarios.push(gerente);
// repositorioDeUsuario.procurarUsuarioLogado("l@gas");
// console.log(repositorioDeUsuario.procurarUsuarioLogado("l@gas"));
//Sair
var operacoesMaster = "***Bem vindo ao Spotflix*** \n" +
    "1 - Cadastro de Gerentes \n" +
    "2 - Logar \n" +
    "3 - Cadastrar-se como Cliente \n" +
    "4 - Sair \n";
console.log("");
///Fica executando sempre                         
while (true) {
    console.log(operacoesMaster);
    comando = readline.question("Digite uma opcao: ").split(" ");
    if (comando[0] == "1") {
        // console.log("Olá, seja bem vindo ao primeiro spotflix da história");
        console.log("Gerente, insira as informações abaixo para cadastro");
        var nomeGerente = readline.question("Digite seu nome: ");
        var emailGerente = readline.question("Digite o seu email: ");
        var senhaGerente = readline.question("Digite sua senha: ");
        var matriculaGerente = readline.question("Digite sua matricula: ");
        var salarioGerente = readline.question("Digite o seu salario: ");
        var operadoresGerente = Array();
        var clientesGerente = Array();
        var produtosGerente = Array();
        var gerente = new Gerente_1.Gerente(nomeGerente, emailGerente, senhaGerente, matriculaGerente, salarioGerente, operadoresGerente, clientesGerente, produtosGerente);
        console.log("Gerente adicionado");
        repositorioDeUsuario.usuarios.push(gerente);
    }
    else if (comando[0] == "2") {
        var email = readline.question("Digite seu email: ");
        var senha = readline.question("Digite sua senha: ");
        var usuario = repositorioDeUsuario.usuarioLogin(email, senha);
        if (usuario instanceof Gerente_1.Gerente) {
            var flag = 0;
            while (flag == 0) {
                var comandoGerente = void 0;
                console.log(" ");
                var operacoes = "1 - Cadastrar Operador \n" +
                    "2 - Remover Operador \n" +
                    "3 - Listar Produtos \n" +
                    "4 - Listar Clientes \n" +
                    "5 - Listar Operadores \n" +
                    "6 - Procurar Produto \n" +
                    "7 - Procurar Cliente \n" +
                    "8 - Procurar Operador \n" +
                    "9 - Sair \n";
                console.log("Ol\u00E1 gerente " + usuario.getNome());
                console.log("O que deseja fazer hoje? \n");
                console.log(operacoes);
                comandoGerente = readline.question("Digite uma opcao: ").split(" ");
                if (comandoGerente[0] == "1") {
                    var nomeOperador = readline.question('Digite o nome do operador: ');
                    var operadorEmail = readline.question("Digite o email do operador: ");
                    var operadorSenha = readline.question("Digite a senha do operador: ");
                    var operadorMatricula = readline.question("Digite a matricula do operador: ");
                    var operadorSalario = readline.question("Digite o salario do operador: ");
                    var operador = new OperadorDeSistema_1.OperadorDeSistema(nomeOperador, operadorEmail, operadorSenha, operadorMatricula, operadorSalario);
                    repositorioDeUsuario.usuarios.push(operador);
                    console.log("Operador adicionado");
                    repositorioDeUsuario.operadores.push(operador);
                }
                else if (comandoGerente[0] == "2") {
                    console.log("Remover Operador");
                    var removeOperador = readline.question("Digite o email do operador para remocao: ");
                    repositorioDeUsuario.removerOperador(removeOperador);
                }
                else if (comandoGerente[0] == "3") {
                    console.log("Lista de Produtos: ");
                    repositorioDeProdutos.listarProdutos();
                }
                else if (comandoGerente[0] == "4") {
                    console.log("Lista de Clientes: \n");
                    repositorioDeUsuario.listarClientes();
                }
                else if (comandoGerente[0] == "5") {
                    console.log("Lista de Operadores");
                    repositorioDeUsuario.listarOperadores();
                }
                else if (comandoGerente[0] == "6") {
                    var procurarProduto = readline.question("Digite o código do produto");
                    if (procurarProduto == repositorioDeProdutos.procurarProduto(procurarProduto)) {
                        console.log("Produto: " + repositorioDeProdutos.procurarProduto(procurarProduto));
                    }
                }
                else if (comandoGerente[0] == "7") {
                    var procuraCliente = readline.question("Digite o cemail do cliente: ");
                    if (procuraCliente == repositorioDeUsuario.procurarCliente(procuraCliente)) {
                        console.log("Cliente: " + repositorioDeUsuario.procurarCliente(email));
                    }
                }
                else if (comandoGerente[0] == "8") {
                    var procurarOperador = readline.question("Digite o email do operador: ");
                    if (procurarOperador == repositorioDeUsuario.procurarCliente(procurarOperador)) {
                        console.log("Operador: " + repositorioDeUsuario.listarOperadores());
                    }
                }
                else if (comandoGerente[0] == "9") {
                    console.log("Sistema finalizado");
                    flag = 1;
                }
                else
                    flag = 1;
            }
        }
        else if (usuario instanceof OperadorDeSistema_1.OperadorDeSistema) {
            var flag = 0;
            while (flag == 0) {
                var comandoOperador = void 0;
                console.log(" ");
                var operacoes = "1 - Cadastrar Produto \n" +
                    "2 - Remover Produto \n" +
                    "3 - Listar Produtos \n" +
                    "4 - Listar Clientes \n" +
                    "5 - Procurar Produto \n" +
                    "6 - Procurar Cliente \n" +
                    "7 - Sair \n";
                console.log("Ola operador " + usuario.getNome());
                console.log("O que deseja fazer hoje? \n");
                console.log(operacoes);
                comandoOperador = readline.question("Digite uma opcao: ").split(" ");
                if (comandoOperador[0] == "1") {
                    var listaProdutos = "Voce poderá adicionar esses produtos: \n" +
                        "1 - Vídeo \n" +
                        "2 - Audio \n" +
                        "3 - Pacotes \n";
                    console.log(listaProdutos);
                    var prodtudoAdiconar = readline.question("Digite a opcao: ").split(" ");
                    if (prodtudoAdiconar[0] == "1") {
                        var comandoVideo = Array();
                        var listaVideos = "Escolha o tipo de vídeo que deseja adicionar: \n" +
                            "1 - Filmes \n" +
                            "2 - Series";
                        console.log(listaVideos);
                        comandoVideo = readline.question("Digite a opcao desejada: ").split(" ");
                        if (comandoVideo[0] == "1") {
                            var codigoFilme = readline.question("Digite o codigo do filme: ");
                            var nomeFilme = readline.question("Digite o nome do filme: ");
                            var generoFilme = readline.question("Digite o genero do filme: ");
                            var precoFilme = readline.question("Digite o preco do filme: ");
                            ;
                            var anoLancamentoFilme = readline.question("Ano de lancamento do filme: ");
                            var faixaEtariaFilme = readline.question("Digite a faixa etaria do filme: ");
                            var duracaoFilme = readline.question("Qual a duracao do filme: ");
                            var vid = new Filmes_1.Filmes(codigoFilme, nomeFilme, generoFilme, precoFilme, anoLancamentoFilme, faixaEtariaFilme, duracaoFilme);
                            repositorioDeProdutos.adicionarFilme(codigoFilme, nomeFilme, generoFilme, precoFilme, anoLancamentoFilme, faixaEtariaFilme, duracaoFilme);
                            console.log("Filme adicionado");
                        }
                        if (comandoVideo[0] == "2") {
                            var codigoSerie = readline.question("Digite o código da Serie: ");
                            var nomeSerie = readline.question("Digite o nome da Serie: ");
                            var generoSerie = readline.question("Digite o genero da Serie: ");
                            var precoSerie = readline.question("Digite o preco da Serie: ");
                            ;
                            var anoLancamentoSerie = readline.question("Ano de lancamento da Serie: ");
                            var faixaEtariaSerie = readline.question("Digite a faixa etaria da Serie: ");
                            var numeroDeEpisodios = readline.question("Digite a quantidade de episodios da serie: ");
                            var duracaoMediaDeEpisodios = readline.question("Qual a duracao da Serie: ");
                            var serie = new Series_1.Series(codigoSerie, nomeSerie, generoSerie, precoSerie, anoLancamentoSerie, faixaEtariaSerie, numeroDeEpisodios, duracaoMediaDeEpisodios);
                            repositorioDeProdutos.adicionarSerie(codigoSerie, nomeSerie, generoSerie, precoSerie, anoLancamentoSerie, faixaEtariaSerie, numeroDeEpisodios, duracaoMediaDeEpisodios);
                        }
                    }
                    if (prodtudoAdiconar[0] == "2") {
                    }
                }
            }
        }
        else if (usuario instanceof Cliente_1.Cliente) {
            var comandoCliente = void 0;
            console.log(" ");
            var operacoes = "1 -Listar produtos da loja \n" +
                "2 - Listar meus produtos \n" +
                "3 - Comprar produto \n" +
                "4 - Play \n" +
                "5 - Sair \n" +
                console.log("Ola cliente " + usuario.getNome());
            console.log("O que você  deseja fazer agora? \n");
            console.log(operacoes);
        }
        else
            console.log(""), console.log("Usuario nao existe!");
        console.log("");
    }
    else if (comando[0] == "3") {
        var operacoesCliente = void 0;
        //cadastrar como cliente
        console.log("Bem vindo ao cadastro de clientes");
        console.log("Insira as informacoes de Cliente abaixo: ");
        var nome = readline.question("Digite seu nome: ");
        var email = readline.question("Digite seu email: ");
        var senha = readline.question("Digite sua senha: ");
        var matricula = readline.question("Digite sua matricula: ");
        var endereco = readline.question("Digite seu endereco: ");
        var datadeNascimento = readline.question("Digite sua data de nascimento: ");
        var listadeProdutos = [];
        var numeroCartao = readline.question("Digite o numero do cartao de credito: ");
        var validadeCartao = readline.question("Digite a validade do seu cartao: ");
        var codigoCCV = readline.question("Digite o codigo o codigo de seguranca(CCV): ");
        var limiteCartao = readline.question("Limite de credito atual: ");
        var cartaoDeCredito = new CartaoDeCredito_1.CartaoDeCredito(numeroCartao, validadeCartao, codigoCCV, limiteCartao);
        ///Adicionando cliente a lista de clientes
        var clienteUser = new Cliente_1.Cliente(nome, email, senha, matricula, endereco, datadeNascimento, listadeProdutos, cartaoDeCredito);
        repositorioDeUsuario.clientes.push(clienteUser);
        repositorioDeUsuario.usuarios.push(clienteUser);
        // console.log("Você digitou essas informacoes:" + clienteUser);
        // if(comandoCliente[0] == "1"){
        //     console.log("Mostrando todos os produtos: \n");
        // //Mostrando os Produtos do Repositório de produtos           
        //     repositorioDeProdutos.listarProdutos(); 
    }
}
// if(comandoOperacao[0] == "1" && repositorioDeUsuario.procurarUsuarioLogado(emailGerente) instanceof Gerente){
//     let comandoGerente : Array<string>;
//     console.log(" ");
//     let operacoes : string = "1 - Cadastrar Operador \n"+
//                              "2 - Remover Operador \n" +
//                              "3 - Listar Produtos \n"+
//                              "4 - Listar Clientes \n" +
//                              "5 - Listar Operadores \n" +
//                              "6 - Procurar Produto \n" +
//                              "7 - Procurar Cliente \n" +
//                              "8 - Procurar Operador \n" +
//                              "9 - Sair \n";
//     console.log(`Olá gerente ${nomeGerente}`);
//     console.log("O que deseja fazer hoje? \n")
//     console.log(operacoes);        
//     comandoGerente = readline.question("Digite uma opcao: ").split(" ");
//     if(comandoGerente[0] == "1"){
//         let nomeOperador = readline.question('Digite o nome do operador: ');
//         let operadorEmail = readline.question("Digite o email do operador: ");
//         let operadorSenha = readline.question("Digite a senha do operador: ");
//         let operadorMatricula = readline.question("Digite a matricula do operador: ");
//         let operadorSalario = readline.question("Digite o salario do operador: ");
//         let operador : OperadorDeSistema = new OperadorDeSistema(nomeOperador,operadorEmail,operadorSenha, operadorMatricula,operadorSalario);
//         repositorioDeUsuario.usuarios.push(operador);
//         if(comandoOperacao[0] == "1" && repositorioDeUsuario.procurarUsuarioLogado(operadorEmail) instanceof OperadorDeSistema){
//             let comandoOperador : Array<string>;
//             console.log(" ");
//             let operacoes : string = "1 - Cadastrar Produto \n"+
//                                      "2 - Remover Operador \n" +
//                                      "3 - Listar Produtos \n"+
//                                      "4 - Listar Clientes \n" +
//                                      "5 - Listar Operadores \n" +
//                                      "6 - Procurar Produto \n" +
//                                      "7 - Procurar Cliente \n" +
//                                      "8 - Procurar Operador \n" +
//                                      "9 - Sair \n";
//     }
// }
// console.log("Faça seu login");
// let login  = readline.question("Digite o seu login: ");
// let senha = readline.question("Digite a sua senha: ");
// let usuarioLogado = repositorioDeUsuario.usuarioLogin(login, senha);
// if(usuarioLogado == null){
//     console.log("");
//     console.log("Não foi possível fazer login");
//     console.log("");
// }
//     } else{
//         console.log("Login bem sucedido");
//         let operacoes : string = "***Olá Maria"; + "***" + "\n"+
//                                 "1 - Listar Produtos da Loja \n" +
//                                 "2 - Listar Meus Produtos \n" +
//                                 "3 - Comprar Produto \n"+
//                                 "4 - Play" +
//                                 "5 - Sair";
//         let comando = Array<string>();  
//         if(comando[0] == "1"){
//                 while(true){
//                     console.log(operacoes);
//                     comando = readline.question("Digite a opção desejada: ").split ("");
//                     if(comando[0]== "1"){
//                     console.log("Mostrando todos os produtos: \n");
//                     ///Mostrando os Produtos do Repositório de produtos           
//                     repositorioDeProdutos.listarProdutos(); 
//                     }
//                     ///Pedir ajuda ao Alan(Comprar produtos e listar produtos comprados);
//                     if(comando[0] == "2"){
//                         console.log("Listanto meus produtos: ");
//                     }
//                     if(comando[0] == "3"){
//                         console.log("Comprando produtos");
//                         let comprarProduto =  readline.question("Digite o código do produto para a compra: ");
//                         console.log("Código digitado: " + comprarProduto);
//                     }
//                     ///Solicitar ajuda ao Alan
//                     if(comando[0] == "4"){
//                        let codigoProudutoExecutar = readline.question("Digite o código do produto para executar: ");
//                         if(codigoProudutoExecutar == repositorioDeProdutos.mapaProdutos.executar()){
//                          console.log("Executando: " + codigoProudutoExecutar);
//                         }
//                     }
//                     if(comando[0]== "5"){
//                         console.log("Você finalizou a aplicacao")
//                         break
//                    }
//                 }
//         }
//     }
//     ///Cadastro de Cliente Opção 02 de Login de Cliente
//     if(comando[0] == "2"){
//      console.log("Bem vindo ao cadastro de clientes");
//      console.log("Insira as informações de Cliente abaixo: ");
//      let nome = readline.question("Digite seu nome: ");
//      let email = readline.question("Digite seu email: ");
//      let senha = readline.question("Digite sua senha: ");
//      let matricula = readline.question("Digite sua matricula: ");
//      let endereco = readline.question("Digite seu endereco: ");
//      let datadeNascimento  : Data = readline.question("Digite sua data de nascimento: ");
//      let listadeProdutos :  Array<Produto> = [];
//      let numeroCartao = readline.question("Digite o numero do cartão de crédito: ");
//      let validadeCartao : Data = readline.question("Digite a validade do seu cartão: ");
//      let codigoCCV = readline.question("Digite o codigo o código de segurança(CCV): ");
//      let limiteCartao = readline.question("Qual o seu limite atual? : ");
//      let cartaoDeCredito : CartaoDeCredito = new CartaoDeCredito(numeroCartao, validadeCartao, codigoCCV, limiteCartao);    
//      let clienteUser : Cliente = new Cliente(nome, email,senha, matricula, endereco, datadeNascimento,listadeProdutos,cartaoDeCredito);
//      console.log(clienteUser);
//     }
//     ///Finalizando a aplicação no primeiro menu
//     if(comando[0] == "3"){
//         console.log("Você deseja sair da aplicacao? \n Digite Sim para sair ou Não para continuar:  ");
//         let sair = readline.question("");
//         if(sair == "Sim" && "sim"){
//             console.log("Você finalizou a aplicacao");
//             break
//         }else{
//             console.log(operacoesMaster);
//         }
//     }
// }
//             }
//             ///Listar Meus Produtos
//            
//             ///Comprando Produtos 
//              if(comando[0]== "3"){
//                 let comparProduto = readline.question("Digite o código do produto para a compra: ");
//                 console.log("Código Digitado: " + comparProduto);
// }
// if(comando[0] == "3"){
//     console.log("Você finalizou a aplicação");
//      break
// }
// if(comando[0] == "00"){
//     console.log("Ola Gerente" )
//     console.log("Bem vindo ao sistema de cadastro de operador de Sistema");
//     let op : OperadorDeSistema = new OperadorDeSistema("Lucas", "admin@admin", "admin", "377843", 5.000);
//     let nome = readline.question("Digite seu nome: ");
//     op.setNome(nome);
//     let email = readline.question("Digite seu email: ");
//     op.setEmail(email);
//     let senha = readline.question("Digite sua senha: ");
//     op.setSenha(senha);
//     let matricula = readline.question("Digite sua matricula: ");
//     op.setMatricula(matricula);
//     let salario = readline.question("Digite o seu salário: ");
//     op.setSalario(salario);
//     console.log("Informações cadastradas no sistema");
//         //let toString : string = "Nome: " + op.getNome() + "\n" +  "Email: " + op.getEmail()  +"\n"+"Senha: " + op.getSenha() +"/n" 
//        // +"\n" + "Matrícula: "+ op.getMatricula() +"\n"+ "Salário: " + op.getSalario();
//         //console.log(toString);
//        // console.log (repositorioDeUsuario.listarClientes());
//         repositorioDeUsuario.adicionarOperador(op);
//         repositorioDeUsuario.listarOperadores();
//     }
//     ///Adicionando o produto: 
//     if(comando[0] == "1"){
//         console.log("Insiras as informações abaixo para adicionar os filmes \n");
//         let codigodoFilme = readline.question("Digite o codigo filme: ");
//         let nomeDoFilme = readline.question("Digite o nome do filme: ")
//         let generoDoFilme = readline.question("Digite o genero do filme: ");
//         let precoDoFilme = readline.question("Preco do filme: ");
//         let anoDeLancamento = readline.question("Idade máxima para assistir o filme: ");
//         let faixaEtaria = readline.question("Faixa etaria: ");
//         let duracao = readline.question("Duracao: ");
//         repositorioDeProdutos.adicionarFilme(codigodoFilme, nomeDoFilme, generoDoFilme,precoDoFilme, 
//             anoDeLancamento, faixaEtaria, duracao);
//         repositorioDeProdutos.adicionarFilme("1", "Filme1", "Terror", 20, 1999, 16, 120);
//         repositorioDeProdutos.adicionarFilme("2", "Filme2", "Terror", 20, 2005, 18, 100);
//         repositorioDeProdutos.adicionarFilme("3", "Filme3", "Terror", 20, 1998, 12, 90);
//     }
//     if(comando[0] == "4"){
//         console.log("Podutos Listados: \n");
//         repositorioDeProdutos.listarProdutos();
//         // repositorioDeProdutos.procurarProduto("1");
//     }
//     if(comando[0] == "7"){
//         let procurarProduto = readline.question("Digite o código do produto para pesquisar: ");
//         repositorioDeProdutos.procurarProduto(procurarProduto);
//     } 
//     if(comando[0] == "3"){
//         let removerCodigo = readline.question("Digite o código do filme para removê-lo: ");
//         repositorioDeProdutos.removerProduto(removerCodigo);
//     }
//     comando = readline.question("Digite a opção: ").split(" ");
// }
// }
