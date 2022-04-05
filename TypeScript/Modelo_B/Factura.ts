import {DetalleFactura} from './DetalleFactura'

export class Factura{
    letra: string
    numero: number
    recargo: number
    tipoPago: string
    totalItems: number
    totalFinal: number
    fecha: Date
    detalles: DetalleFactura[]

    constructor(){
        this.letra = ''
        this.numero = 0
        this.recargo = 0
        this.tipoPago = ''
        this.totalItems = 0
        this.totalFinal = 0
        this.fecha = new Date
        this.detalles = []
    }
    
    calcularTotalItems():number{
        this.detalles.forEach(detalle => {
            this.totalItems += detalle.calcularSubTotal()
        })
        return this.totalItems
    }
    calcularTotalFinal():number{
        this.totalFinal = this.recargo + this.totalItems
        return this.totalFinal
    }
}