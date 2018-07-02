"use strict";
exports.__esModule = true;
var Filmes_1 = require("./Filmes");
var Series_1 = require("./Series");
var Musica_1 = require("./Musica");
var Podcast_1 = require("./Podcast");
var Pacote_1 = require("./Pacote");
var RepositorioDeProdutos = /** @class */ (function () {
    function RepositorioDeProdutos() {
        this.mapaProdutos = new Map();
        this.mapaFilmes = new Map();
        this.mapaSeries = new Map();
        this.mapaMusicas = new Map();
        this.mapaPodcasts = new Map();
        this.mapaPacotes = new Map();
    }
    RepositorioDeProdutos.prototype.adicionarProduto = function (codigo, Produto) {
        this.mapaProdutos.set(codigo, Produto);
    };
    RepositorioDeProdutos.prototype.adicionarFilme = function (codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao) {
        var filme = new Filmes_1.Filmes(codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao);
        this.mapaFilmes.set(codigo, filme);
        this.adicionarProduto(codigo, filme);
    };
    RepositorioDeProdutos.prototype.adicionarSerie = function (codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpisodio) {
        var serie = new Series_1.Series(codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpisodio);
        this.mapaSeries.set(codigo, serie);
        this.adicionarProduto(codigo, serie);
    };
    RepositorioDeProdutos.prototype.adicionarMusica = function (codigo, nome, genero, preco, autor, duracao, album) {
        var musica = new Musica_1.Musica(codigo, nome, genero, preco, autor, duracao, album);
        this.mapaMusicas.set(codigo, musica);
        this.adicionarProduto(codigo, musica);
    };
    RepositorioDeProdutos.prototype.adicionarPodcast = function (codigo, nome, genero, preco, autor, duracao, tematica) {
        var podcast = new Podcast_1.Podcast(codigo, nome, genero, preco, autor, duracao, tematica);
        this.mapaPodcasts.set(codigo, podcast);
        this.adicionarProduto(codigo, podcast);
    };
    RepositorioDeProdutos.prototype.adicionarPacote = function (codigo, nome, genero, preco, produtos, validade, precoDeProtudos) {
        var pacote = new Pacote_1.Pacote(codigo, nome, genero, preco, produtos, validade, precoDeProtudos);
        this.mapaPacotes.set(codigo, pacote);
        this.adicionarProduto(codigo, pacote);
    };
    RepositorioDeProdutos.prototype.listarProdutos = function () {
        this.mapaProdutos.forEach(function (valor, chave) {
            console.log(valor);
        });
    };
    RepositorioDeProdutos.prototype.procurarProduto = function (codigo) {
        if (this.mapaProdutos.has(codigo)) {
            console.log(this.mapaProdutos.get(codigo));
        }
        else
            console.log("Produto não encontrado");
    };
    RepositorioDeProdutos.prototype.removerProduto = function (codigo) {
        if (!this.mapaProdutos.has(codigo)) {
            return false;
        }
        this.mapaProdutos["delete"](codigo);
        return true;
    };
    return RepositorioDeProdutos;
}());
exports.RepositorioDeProdutos = RepositorioDeProdutos;
