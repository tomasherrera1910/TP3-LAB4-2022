"use strict";
exports.__esModule = true;
var Articulo_1 = require("./Articulo");
var Cliente_1 = require("./Cliente");
var DetalleFactura_1 = require("./DetalleFactura");
var Factura_1 = require("./Factura");
var cliente = new Cliente_1.Cliente();
cliente.numero = 1;
cliente.razonSocial = 'Vea';
cliente.cuit = 123456;
var factura1 = new Factura_1.Factura();
factura1.letra = 'A';
factura1.numero = 1;
factura1.recargo = 30;
factura1.tipoPago = 'E';
factura1.totalItems = 0;
factura1.totalFinal = 0;
factura1.fecha = new Date();
var factura2 = new Factura_1.Factura();
factura2.letra = 'A';
factura2.numero = 2;
factura2.recargo = 45;
factura2.tipoPago = 'TC';
factura2.totalItems = 0;
factura2.totalFinal = 0;
factura2.fecha = new Date();
var factura3 = new Factura_1.Factura();
factura3.letra = 'A';
factura3.numero = 3;
factura3.recargo = 25;
factura3.tipoPago = 'TD';
factura3.totalItems = 0;
factura3.totalFinal = 0;
factura3.fecha = new Date();
var articulo1 = new Articulo_1.Articulo();
articulo1.codigo = 1;
articulo1.denominacion = 'Desodorante';
articulo1.precio = 180;
articulo1.unidadMedida = 'ml';
var articulo2 = new Articulo_1.Articulo();
articulo2.codigo = 2;
articulo2.denominacion = 'Aceitunas';
articulo2.precio = 200;
articulo2.unidadMedida = 'gr';
var articulo3 = new Articulo_1.Articulo();
articulo3.codigo = 3;
articulo3.denominacion = 'Gaseosa';
articulo3.precio = 250;
articulo3.unidadMedida = 'l';
var articulo4 = new Articulo_1.Articulo();
articulo4.codigo = 4;
articulo4.denominacion = 'Cerveza';
articulo4.precio = 220;
articulo4.unidadMedida = 'l';
var articulo5 = new Articulo_1.Articulo();
articulo5.codigo = 5;
articulo5.denominacion = 'Fiambre';
articulo5.precio = 300;
articulo5.unidadMedida = 'gr';
var detalleFactura1 = new DetalleFactura_1.DetalleFactura();
detalleFactura1.cantidad = 3;
detalleFactura1.subtotal = 0;
var detalleFactura2 = new DetalleFactura_1.DetalleFactura();
detalleFactura2.cantidad = 2;
detalleFactura2.subtotal = 0;
var detalleFactura3 = new DetalleFactura_1.DetalleFactura();
detalleFactura3.cantidad = 5;
detalleFactura3.subtotal = 0;
var detalleFactura4 = new DetalleFactura_1.DetalleFactura();
detalleFactura4.cantidad = 1;
detalleFactura4.subtotal = 0;
var detalleFactura5 = new DetalleFactura_1.DetalleFactura();
detalleFactura5.cantidad = 3;
detalleFactura5.subtotal = 0;
var detalleFactura6 = new DetalleFactura_1.DetalleFactura();
detalleFactura6.cantidad = 2;
detalleFactura6.subtotal = 0;
var detalleFactura7 = new DetalleFactura_1.DetalleFactura();
detalleFactura7.cantidad = 2;
detalleFactura7.subtotal = 0;
var detalleFactura8 = new DetalleFactura_1.DetalleFactura();
detalleFactura8.cantidad = 5;
detalleFactura8.subtotal = 0;
var detalleFactura9 = new DetalleFactura_1.DetalleFactura();
detalleFactura9.cantidad = 1;
detalleFactura9.subtotal = 0;
var detalleFactura10 = new DetalleFactura_1.DetalleFactura();
detalleFactura10.cantidad = 3;
detalleFactura10.subtotal = 0;
//asignar valores
detalleFactura1.articulo = articulo1;
detalleFactura2.articulo = articulo2;
detalleFactura3.articulo = articulo3;
detalleFactura4.articulo = articulo4;
detalleFactura5.articulo = articulo5;
detalleFactura6.articulo = articulo1;
detalleFactura7.articulo = articulo2;
detalleFactura8.articulo = articulo3;
detalleFactura9.articulo = articulo4;
detalleFactura10.articulo = articulo5;
factura1.detalles.push(detalleFactura1);
factura1.detalles.push(detalleFactura2);
factura1.detalles.push(detalleFactura3);
factura2.detalles.push(detalleFactura4);
factura2.detalles.push(detalleFactura5);
factura2.detalles.push(detalleFactura6);
factura3.detalles.push(detalleFactura7);
factura3.detalles.push(detalleFactura8);
factura3.detalles.push(detalleFactura9);
factura3.detalles.push(detalleFactura10);
cliente.facturas.push(factura1);
cliente.facturas.push(factura2);
cliente.facturas.push(factura3);
cliente.facturas.forEach(function (factura) {
    factura.detalles.forEach(function (detalle) {
        detalle.calcularSubTotal();
    });
    factura.calcularTotalItems();
});
factura1.calcularTotalFinal();
var tipoPago = 'E';
var totalPorTipoDePago = cliente.totalFacturadoXTipoPago(tipoPago);
console.log('----------------------------------');
console.log("USANDO EL TIPO DE PAGO " + tipoPago + " EL CLIENTE GASTO UN TOTAL DE " + totalPorTipoDePago);
console.log('----------------------------------');
