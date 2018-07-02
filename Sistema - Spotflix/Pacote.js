"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Produto_1 = require("./Produto");
var Pacote = /** @class */ (function (_super) {
    __extends(Pacote, _super);
    function Pacote(codigo, nome, genero, preco, produtos, validade, precoDeProtudos, filmes, series, musica, podcast) {
        var _this = _super.call(this, codigo, nome, genero, preco) || this;
        _this.filmes = filmes;
        _this.series = series;
        _this.musica = musica;
        _this.podcast = podcast;
        _this.produtos = produtos;
        _this.validade = validade;
        _this.precoDeProtudos = precoDeProtudos;
        return _this;
    }
    Pacote.prototype.getProdutos = function () {
        return this.produtos;
    };
    Pacote.prototype.setProdutos = function (produtos) {
        this.produtos = produtos;
    };
    Pacote.prototype.getValidade = function () {
        return this.validade;
    };
    Pacote.prototype.setValidade = function (validade) {
        this.validade = validade;
    };
    Pacote.prototype.getPrecoDeProtudos = function () {
        return this.precoDeProtudos;
    };
    Pacote.prototype.setPrecoDeProtudos = function (precoDeProtudos) {
        this.precoDeProtudos = precoDeProtudos;
    };
    Pacote.prototype.executar = function () {
    };
    ///Colocando Bonificação por Preco de Produto.
    Pacote.prototype.valorMensal = function (precoDeProdutos) {
        return this.precoDeProtudos * 0.15;
    };
    return Pacote;
}(Produto_1.Produto));
exports.Pacote = Pacote;
