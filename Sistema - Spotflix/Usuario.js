"use strict";
exports.__esModule = true;
var Usuario = /** @class */ (function () {
    function Usuario(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    Usuario.prototype.setEmail = function (email) {
        this.email = email;
    };
    Usuario.prototype.getSenha = function () {
        return this.senha;
    };
    Usuario.prototype.setSenha = function (senha) {
        this.senha = senha;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
