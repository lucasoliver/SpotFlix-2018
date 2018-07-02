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
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, email, senha, matricula, salario) {
        var _this = _super.call(this, nome, email, senha) || this;
        _this.matricula = matricula;
        _this.salario = salario;
        return _this;
    }
    Funcionario.prototype.getMatricula = function () {
        return this.matricula;
    };
    Funcionario.prototype.setMatricula = function (matricula) {
        this.matricula = matricula;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    return Funcionario;
}(Usuario_1.Usuario));
exports.Funcionario = Funcionario;
