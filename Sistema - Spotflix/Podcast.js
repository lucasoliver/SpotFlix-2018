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
var Audio_1 = require("./Audio");
var Podcast = /** @class */ (function (_super) {
    __extends(Podcast, _super);
    function Podcast(codigo, nome, genero, preco, autor, duracao, tematica) {
        var _this = _super.call(this, codigo, nome, genero, preco, autor, duracao) || this;
        _this.tematica = tematica;
        return _this;
    }
    Podcast.prototype.getTematica = function () {
        return this.tematica;
    };
    Podcast.prototype.setTematica = function (tematica) {
        this.tematica = tematica;
    };
    Podcast.prototype.executar = function () {
        console.log("Executando: ");
    };
    return Podcast;
}(Audio_1.Audio));
exports.Podcast = Podcast;
