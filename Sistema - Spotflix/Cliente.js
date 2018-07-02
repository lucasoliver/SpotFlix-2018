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
var Usuario_1 = require("./Usuario");
var RepositoriosDeProdutos_1 = require("./RepositoriosDeProdutos");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, email, senha, matricula, endereco, dataDeNascimento, listaDeProdutos, cartaoDeCredito) {
        var _this = _super.call(this, nome, email, senha) || this;
        _this.endereco = endereco;
        _this.dataDeNascimento = dataDeNascimento;
        _this.listaDeProdutos = listaDeProdutos;
        _this.cartaoDeCredito = cartaoDeCredito;
        return _this;
    }
    Cliente.prototype.getEndereco = function () {
        return this.endereco;
    };
    Cliente.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    Cliente.prototype.getDataDeNascimento = function () {
        return this.dataDeNascimento;
    };
    Cliente.prototype.setDataDeNascimento = function (dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    };
    Cliente.prototype.getListaDeProdutos = function () {
        return this.listaDeProdutos;
    };
    Cliente.prototype.setListaDeProdutos = function (listaDeProdutos) {
        this.listaDeProdutos = listaDeProdutos;
    };
    Cliente.prototype.getCartaoDeCredito = function () {
        return this.cartaoDeCredito;
    };
    Cliente.prototype.setCartaoDeCredito = function (cartaoDeCredito) {
        this.cartaoDeCredito = cartaoDeCredito;
    };
    Cliente.prototype.listarMeusProdutos = function () {
        for (var _i = 0, _a = this.listaDeProdutos; _i < _a.length; _i++) {
            var produto = _a[_i];
            console.log(produto.getNome());
        }
    };
    Cliente.prototype.comprarProduto = function () {
        var preco = 0;
        if (RepositoriosDeProdutos_1.RepositorioDeProdutos.length == 0) {
            return false;
        }
        else {
            for (var _i = 0, _a = this.listaDeProdutos; _i < _a.length; _i++) {
                var produto = _a[_i];
                preco += produto.getpreco();
            }
        }
        return true;
    };
    Cliente.prototype.limiteDoCartao = function () {
        var soma = 0;
        if (RepositoriosDeProdutos_1.RepositorioDeProdutos.length == 0) {
            return false;
        }
        else {
            for (var _i = 0, _a = this.listaDeProdutos; _i < _a.length; _i++) {
                var produto = _a[_i];
                soma += produto.getpreco();
            }
        }
        if (this.cartaoDeCredito.getLimite() >= soma) {
            return true;
        }
        else {
            return false;
        }
        // if(this.cartaoDeCredito.getLimite() > RepositorioDeProdutos)
    };
    return Cliente;
}(Usuario_1.Usuario));
exports.Cliente = Cliente;
