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
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(codigo, nome, genero, preco, anoLocamento, faixaEtaria) {
        var _this = _super.call(this, codigo, nome, genero, preco) || this;
        _this.anoLocamento = anoLocamento;
        _this.faixaEtaria = faixaEtaria;
        return _this;
    }
    Video.prototype.getanoLocamento = function () {
        return this.anoLocamento;
    };
    Video.prototype.setanoLocamento = function (anoLocamento) {
        this.anoLocamento = anoLocamento;
    };
    Video.prototype.getfaixaEtaria = function () {
        return this.faixaEtaria;
    };
    Video.prototype.setfaixaEtariao = function (faixaEtaria) {
        this.faixaEtaria = faixaEtaria;
    };
    Video.prototype.executar = function () {
        console.log("Executando: ");
    };
    return Video;
}(Produto_1.Produto));
exports.Video = Video;
