import { Detalle } from './Detalle'

export class HojaRuta{
    fecha: Date
    numero: number
    detalles: Detalle[]

    constructor(){
        this.fecha = new Date
        this.numero = 0
        this.detalles = []        
    }


calcularTotalKilometros() : number{
    let totalKilometrosTotal: number = 0;
    this.detalles.forEach(detalle => {
    totalKilometrosTotal += detalle.kmRegreso - detalle.kmSalida    
    })
    return totalKilometrosTotal
}

}