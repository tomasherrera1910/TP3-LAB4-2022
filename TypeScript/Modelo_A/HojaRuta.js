"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta() {
        this.fecha = new Date;
        this.numero = 0;
        this.detalles = [];
    }
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var totalKilometrosTotal = 0;
        this.detalles.forEach(function (detalle) {
            totalKilometrosTotal += detalle.kmRegreso - detalle.kmSalida;
        });
        return totalKilometrosTotal;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
