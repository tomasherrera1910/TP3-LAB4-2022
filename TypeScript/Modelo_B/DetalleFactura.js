"use strict";
exports.__esModule = true;
exports.DetalleFactura = void 0;
var Articulo_1 = require("./Articulo");
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura() {
        this.cantidad = 0;
        this.subtotal = 0;
        this.articulo = new Articulo_1.Articulo();
    }
    DetalleFactura.prototype.calcularSubTotal = function () {
        this.subtotal = this.articulo.precio * this.cantidad;
        return this.subtotal;
    };
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
