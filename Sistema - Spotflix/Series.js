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
var Series = /** @class */ (function (_super) {
    __extends(Series, _super);
    function Series(codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpsodio) {
        var _this = _super.call(this, codigo, nome, genero, preco, anoLocamento, faixaEtaria) || this;
        _this.numeroDeEpisodios = numeroDeEpisodios;
        _this.duracaoMediaDeEpsodio = duracaoMediaDeEpsodio;
        return _this;
    }
    Series.prototype.getNumeroDeEpisodios = function () {
        return this.numeroDeEpisodios;
    };
    Series.prototype.setNumeroDeEpisodios = function (numeroDeEpisodios) {
        this.numeroDeEpisodios = numeroDeEpisodios;
    };
    Series.prototype.getDuracaoMediaDeEpsodio = function () {
        return this.duracaoMediaDeEpsodio;
    };
    Series.prototype.setDuracaoMediaDeEpsodio = function (duracaoMediaDeEpsodio) {
        this.numeroDeEpisodios = duracaoMediaDeEpsodio;
    };
    Series.prototype.executar = function () {
        console.log("Executando: ");
    };
    return Series;
}(Video_1.Video));
exports.Series = Series;
