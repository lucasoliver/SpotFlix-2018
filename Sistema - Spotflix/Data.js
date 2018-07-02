"use strict";
exports.__esModule = true;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.setDia = function (dia) {
        this.dia = dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.setMes = function (mes) {
        this.mes = mes;
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    return Data;
}());
exports.Data = Data;
