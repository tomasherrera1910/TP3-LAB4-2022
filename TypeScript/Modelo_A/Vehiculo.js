"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.patente = '';
        this.marca = '';
        this.modelo = '';
        this.hojas = [];
    }
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var totalKilometrosRecorridos = 0;
        this.hojas.forEach(function (hoja) {
            if (hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta) {
                totalKilometrosRecorridos += hoja.calcularTotalKilometros();
            }
        });
        return totalKilometrosRecorridos;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
