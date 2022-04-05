"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura() {
        this.letra = '';
        this.numero = 0;
        this.recargo = 0;
        this.tipoPago = '';
        this.totalItems = 0;
        this.totalFinal = 0;
        this.fecha = new Date;
        this.detalles = [];
    }
    Factura.prototype.calcularTotalItems = function () {
        var _this = this;
        this.detalles.forEach(function (detalle) {
            _this.totalItems += detalle.calcularSubTotal();
        });
        return this.totalItems;
    };
    Factura.prototype.calcularTotalFinal = function () {
        this.totalFinal = this.recargo + this.totalItems;
        return this.totalFinal;
    };
    return Factura;
}());
exports.Factura = Factura;
