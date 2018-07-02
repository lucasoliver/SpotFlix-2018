"use strict";
exports.__esModule = true;
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito(numero, validade, codigoCCV, limite) {
        this.numero = numero;
        this.validade = validade;
        this.codigoCCV = codigoCCV;
        this.limite = limite;
    }
    CartaoDeCredito.prototype.getNumero = function () {
        return this.numero;
    };
    CartaoDeCredito.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    CartaoDeCredito.prototype.getValidade = function () {
        return this.validade;
    };
    CartaoDeCredito.prototype.setValidade = function (validade) {
        this.validade = validade;
    };
    CartaoDeCredito.prototype.getCodigoCCV = function () {
        return this.codigoCCV;
    };
    CartaoDeCredito.prototype.setCodigoCCV = function (codigoCCV) {
        this.codigoCCV = codigoCCV;
    };
    CartaoDeCredito.prototype.getLimite = function () {
        return this.limite;
    };
    CartaoDeCredito.prototype.setLimite = function (limite) {
        this.limite = limite;
    };
    return CartaoDeCredito;
}());
exports.CartaoDeCredito = CartaoDeCredito;
