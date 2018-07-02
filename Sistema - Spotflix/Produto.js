"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(codigo, nome, genero, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero;
        this.preco = preco;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Produto.prototype.getGenero = function () {
        return this.genero;
    };
    Produto.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Produto.prototype.getpreco = function () {
        return this.preco;
    };
    Produto.prototype.setpreco = function (preco) {
        this.preco = preco;
    };
    return Produto;
}());
exports.Produto = Produto;
