import { Articulo } from "./Articulo";
import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./Factura";

let cliente: Cliente = new Cliente()
    cliente.numero = 1
    cliente.razonSocial = 'Vea'
    cliente.cuit = 123456

let factura1: Factura = new Factura()
    factura1.letra = 'A'
    factura1.numero = 1
    factura1.recargo = 30
    factura1.tipoPago = 'E'
    factura1.totalItems = 0
    factura1.totalFinal = 0
    factura1.fecha = new Date()

let factura2: Factura = new Factura()
    factura2.letra = 'A'
    factura2.numero = 2
    factura2.recargo = 45
    factura2.tipoPago = 'TC'
    factura2.totalItems = 0
    factura2.totalFinal = 0
    factura2.fecha = new Date()

let factura3: Factura = new Factura()
    factura3.letra = 'A'
    factura3.numero = 3
    factura3.recargo = 25
    factura3.tipoPago = 'TD'
    factura3.totalItems = 0
    factura3.totalFinal = 0
    factura3.fecha = new Date() 

let articulo1: Articulo = new Articulo()    
    articulo1.codigo = 1
    articulo1.denominacion = 'Desodorante'
    articulo1.precio = 180
    articulo1.unidadMedida = 'ml'

let articulo2: Articulo = new Articulo()    
    articulo2.codigo = 2
    articulo2.denominacion = 'Aceitunas'
    articulo2.precio = 200
    articulo2.unidadMedida = 'gr'

let articulo3: Articulo = new Articulo()    
    articulo3.codigo = 3
    articulo3.denominacion = 'Gaseosa'
    articulo3.precio = 250
    articulo3.unidadMedida = 'l'

let articulo4: Articulo = new Articulo()    
    articulo4.codigo = 4
    articulo4.denominacion = 'Cerveza'
    articulo4.precio = 220
    articulo4.unidadMedida = 'l'

let articulo5: Articulo = new Articulo()    
    articulo5.codigo = 5
    articulo5.denominacion = 'Fiambre'
    articulo5.precio = 300
    articulo5.unidadMedida = 'gr'

let detalleFactura1: DetalleFactura = new DetalleFactura()
    detalleFactura1.cantidad = 3
    detalleFactura1.subtotal = 0

let detalleFactura2: DetalleFactura = new DetalleFactura()
    detalleFactura2.cantidad = 2
    detalleFactura2.subtotal = 0

let detalleFactura3: DetalleFactura = new DetalleFactura()
    detalleFactura3.cantidad = 5
    detalleFactura3.subtotal = 0

let detalleFactura4: DetalleFactura = new DetalleFactura()
    detalleFactura4.cantidad = 1
    detalleFactura4.subtotal = 0

let detalleFactura5: DetalleFactura = new DetalleFactura()
    detalleFactura5.cantidad = 3
    detalleFactura5.subtotal = 0

let detalleFactura6: DetalleFactura = new DetalleFactura()
    detalleFactura6.cantidad = 2
    detalleFactura6.subtotal = 0

let detalleFactura7: DetalleFactura = new DetalleFactura()
    detalleFactura7.cantidad = 2
    detalleFactura7.subtotal = 0

let detalleFactura8: DetalleFactura = new DetalleFactura()
    detalleFactura8.cantidad = 5
    detalleFactura8.subtotal = 0

let detalleFactura9: DetalleFactura = new DetalleFactura()
    detalleFactura9.cantidad = 1
    detalleFactura9.subtotal = 0

let detalleFactura10: DetalleFactura = new DetalleFactura()
    detalleFactura10.cantidad = 3
    detalleFactura10.subtotal = 0

//asignar valores
    detalleFactura1.articulo = articulo1
    detalleFactura2.articulo = articulo2
    detalleFactura3.articulo = articulo3
    detalleFactura4.articulo = articulo4
    detalleFactura5.articulo = articulo5
    detalleFactura6.articulo = articulo1
    detalleFactura7.articulo = articulo2
    detalleFactura8.articulo = articulo3
    detalleFactura9.articulo = articulo4
    detalleFactura10.articulo = articulo5

    factura1.detalles.push(detalleFactura1)
    factura1.detalles.push(detalleFactura2)
    factura1.detalles.push(detalleFactura3)

    factura2.detalles.push(detalleFactura4)
    factura2.detalles.push(detalleFactura5)
    factura2.detalles.push(detalleFactura6)

    factura3.detalles.push(detalleFactura7)
    factura3.detalles.push(detalleFactura8)
    factura3.detalles.push(detalleFactura9)
    factura3.detalles.push(detalleFactura10)

    cliente.facturas.push(factura1)
    cliente.facturas.push(factura2)
    cliente.facturas.push(factura3)

    cliente.facturas.forEach(factura => {
        factura.detalles.forEach(detalle => {
            detalle.calcularSubTotal()
        })
        factura.calcularTotalItems()
    })
    factura1.calcularTotalFinal()
    const tipoPago:string = 'E'
    const totalPorTipoDePago:number = cliente.totalFacturadoXTipoPago(tipoPago)

    console.log('----------------------------------')
    console.log(`USANDO EL TIPO DE PAGO ${tipoPago} EL CLIENTE GASTO UN TOTAL DE ${totalPorTipoDePago}`)
    console.log('----------------------------------')