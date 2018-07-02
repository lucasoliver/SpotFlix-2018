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
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio(codigo, nome, genero, preco, autor, duracao) {
        var _this = _super.call(this, codigo, nome, genero, preco) || this;
        _this.autor = autor;
        _this.duracao = duracao;
        return _this;
    }
    Audio.prototype.getAutor = function () {
        return this.autor;
    };
    Audio.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Audio.prototype.getDuracao = function () {
        return this.duracao;
    };
    Audio.prototype.setDuracao = function (duracao) {
        this.duracao = duracao;
    };
    Audio.prototype.executar = function () {
        console.log("Executando: ");
    };
    return Audio;
}(Produto_1.Produto));
exports.Audio = Audio;
