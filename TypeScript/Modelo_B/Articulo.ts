import { DetalleFactura } from "./DetalleFactura";

export class Articulo{
    codigo: number
    denominacion: string
    precio: number
    unidadMedida: string
    
    constructor(){
        this.codigo = 0
        this.denominacion = ''
        this.precio = 0
        this.unidadMedida = ''
    }
}