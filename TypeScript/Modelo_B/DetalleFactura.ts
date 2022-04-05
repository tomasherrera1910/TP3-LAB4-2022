import { Articulo } from './Articulo'
export class DetalleFactura{
    cantidad: number
    subtotal: number
    articulo: Articulo

    constructor(){
        this.cantidad = 0
        this.subtotal = 0
        this.articulo = new Articulo()
    }

    calcularSubTotal():number{
        this.subtotal = this.articulo.precio * this.cantidad
        return this.subtotal
    }

}