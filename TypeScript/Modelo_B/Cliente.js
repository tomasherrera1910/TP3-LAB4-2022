"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.numero = 0;
        this.razonSocial = '';
        this.cuit = 0;
        this.facturas = [];
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        if (tipoPago === 'E' || tipoPago === 'TD' || tipoPago === 'TC' || tipoPago === 'CC' || tipoPago === 'TR') {
            var facturasTipoPago = this.facturas.filter(function (factura) { return factura.tipoPago === tipoPago; });
            facturasTipoPago.forEach(function (factura) {
                total += factura.calcularTotalFinal();
            });
        }
        else {
            this.facturas.forEach(function (factura) {
                total += factura.calcularTotalFinal();
            });
            console.log("EL TIPO DE PAGO INGRESADO NO ES V\u00C1LIDO PERO EL TOTAL GASTADO POR EL CLIENTE SIN IMPORTAR TIPO DE PAGO ES DE " + total);
        }
        return total;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
