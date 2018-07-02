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
var OperadorDeSistema = /** @class */ (function (_super) {
    __extends(OperadorDeSistema, _super);
    function OperadorDeSistema(nome, email, senha, matricula, salario) {
        return _super.call(this, nome, email, senha, matricula, salario) || this;
    }
    return OperadorDeSistema;
}(Funcionario_1.Funcionario));
exports.OperadorDeSistema = OperadorDeSistema;
// console.log ("tá rodando")
// let filme = [new Filmes ("0001", "Era do gelo", "aventura", 1, 2011, 12, 90)];
// let serie = [new Series ("002", "gameofthrones", "aventura", 20, 2018, 18, 50, 45, )]
// let musica = [new Musica ("003", "mar eu", "MPB", 10, "Iracemas", 2, "Plurisom")]
// let podcast = [new Podcast("004", "AULADEPOO", "Educação", 100, "Anderson", 10, "trabalhofinal")]
// let data = new Data (19,12,2018);
// console.log(filme)
// let pacote = [new Pacote ("888", "sóterro","terro", 200,  data, 20, filme)]
// console.log(pacote[0].getProdutos());
