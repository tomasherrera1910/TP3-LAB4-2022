import { Vehiculo } from "./Vehiculo";
import { HojaRuta } from "./HojaRuta";
import { Detalle } from "./Detalle";

let vehiculo: Vehiculo = new Vehiculo()
    vehiculo.marca = 'Fiat'
    vehiculo.modelo = 'Uno'
    vehiculo.patente = 'MQI 000'

    // Hojas de vehiculo
let hojaRuta: HojaRuta = new HojaRuta()
    hojaRuta.numero = 1;
    hojaRuta.fecha = new Date(2022, 4, 1)

let hojaRuta2: HojaRuta = new HojaRuta()
    hojaRuta2.numero = 2;
    hojaRuta2.fecha = new Date(2022, 6, 12)

let hojaRuta3: HojaRuta = new HojaRuta()
    hojaRuta3.numero = 3;
    hojaRuta3.fecha = new Date(2021, 7, 16)
    //detalles hojaruta1
let detalle: Detalle = new Detalle()
    detalle.kmSalida = 10
    detalle.kmRegreso = 15
    detalle.horaSalida = 10
    detalle.horaRegreso = 15
    detalle.minutoSalida = 10
    detalle.minutoRegreso = 15

let detalle2: Detalle = new Detalle()
    detalle2.kmSalida = 15
    detalle2.kmRegreso = 18
    detalle2.horaSalida = 10
    detalle2.horaRegreso = 15
    detalle2.minutoSalida = 10
    detalle2.minutoRegreso = 15

let detalle3: Detalle = new Detalle()
    detalle3.kmSalida = 18
    detalle3.kmRegreso = 24
    detalle3.horaSalida = 10
    detalle3.horaRegreso = 15
    detalle3.minutoSalida = 10
    detalle3.minutoRegreso = 15

    //detalles hojaruta2
let detalle4: Detalle = new Detalle()
    detalle4.kmSalida = 32
    detalle4.kmRegreso = 36
    detalle4.horaSalida = 10
    detalle4.horaRegreso = 15
    detalle4.minutoSalida = 10
    detalle4.minutoRegreso = 15

let detalle5: Detalle = new Detalle()
    detalle5.kmSalida = 36
    detalle5.kmRegreso = 41
    detalle5.horaSalida = 10
    detalle5.horaRegreso = 15
    detalle5.minutoSalida = 10
    detalle5.minutoRegreso = 15

let detalle6: Detalle = new Detalle()
    detalle6.kmSalida = 41
    detalle6.kmRegreso = 52
    detalle6.horaSalida = 10
    detalle6.horaRegreso = 15
    detalle6.minutoSalida = 10
    detalle6.minutoRegreso = 15
    
    //detalles hojaruta3
let detalle7: Detalle = new Detalle()
    detalle7.kmSalida = 112
    detalle7.kmRegreso = 119
    detalle7.horaSalida = 10
    detalle7.horaRegreso = 15
    detalle7.minutoSalida = 10
    detalle7.minutoRegreso = 15

let detalle8: Detalle = new Detalle()
    detalle8.kmSalida = 119
    detalle8.kmRegreso = 138
    detalle8.horaSalida = 10
    detalle8.horaRegreso = 15
    detalle8.minutoSalida = 10
    detalle8.minutoRegreso = 15

let detalle9: Detalle = new Detalle()
    detalle9.kmSalida = 138
    detalle9.kmRegreso = 141
    detalle9.horaSalida = 10
    detalle9.horaRegreso = 15
    detalle9.minutoSalida = 10
    detalle9.minutoRegreso = 15
    
    //asignando valores
    vehiculo.hojas.push(hojaRuta)
    vehiculo.hojas.push(hojaRuta2)
    vehiculo.hojas.push(hojaRuta3)

    hojaRuta.detalles.push(detalle)
    hojaRuta.detalles.push(detalle2)
    hojaRuta.detalles.push(detalle3)

    hojaRuta2.detalles.push(detalle4)
    hojaRuta2.detalles.push(detalle5)
    hojaRuta2.detalles.push(detalle6)

    hojaRuta3.detalles.push(detalle7)
    hojaRuta3.detalles.push(detalle8)
    hojaRuta3.detalles.push(detalle9)
    
    const totalKilometros:number = hojaRuta.calcularTotalKilometros()
    const totalKilometros2:number = hojaRuta2.calcularTotalKilometros()
    const totalKilometros3:number = hojaRuta3.calcularTotalKilometros()
    const totalKilometrosRecorridos:number = vehiculo.calcularTotalKilometrosRecorridos(new Date(2022,3,25), new Date(2022, 6, 14))

    console.log('------------------------------------------')
    console.log(`TOTAL DE KILOMETROS HOJA RUTA 1: ${totalKilometros}`)
    console.log(`TOTAL DE KILOMETROS HOJA RUTA 2: ${totalKilometros2}`)
    console.log(`TOTAL DE KILOMETROS HOJA RUTA 3: ${totalKilometros3}`)
    console.log(`TOTAL DE KILOMETROS VEHICULO ENTRE LAS FECHAS MARCADAS: ${totalKilometrosRecorridos}`)
    console.log('------------------------------------------')
        