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
var Funcionario_1 = require("./Funcionario");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, email, senha, matricula, salario, operadores, clientes, produtos) {
        var _this = _super.call(this, nome, email, senha, matricula, salario) || this;
        _this.operadores = operadores;
        _this.clientes = clientes;
        _this.produtos = produtos;
        return _this;
    }
    Gerente.prototype.getOperadores = function () {
        return this.operadores;
    };
    Gerente.prototype.setOperadores = function (operadores) {
        this.operadores = operadores;
    };
    Gerente.prototype.removerOperador = function (email) {
        for (var i = 0; i < this.operadores.length; i++) {
            if (this.operadores[i].getEmail() == email) {
                this.operadores.splice(i, 1);
                return "operador deletado";
            }
        }
        return "email não encontrado";
    };
    // public LisClieProduOperad () : void{
    //     if()
    //     for (let i = 0; i < )
    Gerente.prototype.listarClientes = function () {
        return this.clientes;
    };
    Gerente.prototype.listarProdutos = function () {
        return this.produtos;
    };
    return Gerente;
}(Funcionario_1.Funcionario));
exports.Gerente = Gerente;
// Adicionar Operadores 
// Remover Operadores
// Listar os Clientes, Produtos e Operadores
// Procurar Cliente, Produto e Operadore por email ou codigo
