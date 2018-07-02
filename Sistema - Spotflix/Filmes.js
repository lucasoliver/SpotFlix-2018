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
var Video_1 = require("./Video");
var Filmes = /** @class */ (function (_super) {
    __extends(Filmes, _super);
    function Filmes(codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao) {
        var _this = _super.call(this, codigo, nome, genero, preco, anoLocamento, faixaEtaria) || this;
        _this.duracao = duracao;
        return _this;
    }
    Filmes.prototype.getDuracao = function () {
        return this.duracao;
    };
    Filmes.prototype.setDuracao = function (duracao) {
        this.duracao = duracao;
    };
    Filmes.prototype.executar = function () {
        console.console.log(("Executando: "));
    };
    return Filmes;
}(Video_1.Video));
exports.Filmes = Filmes;
