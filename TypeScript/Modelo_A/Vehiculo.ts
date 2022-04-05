import {HojaRuta} from './HojaRuta'

export class Vehiculo{
    patente: string
    marca: string
    modelo: string
    hojas: HojaRuta[]

    constructor(){
        this.patente = ''
        this.marca = ''
        this.modelo = ''
        this.hojas = []
    }

    calcularTotalKilometrosRecorridos(fechaDesde:Date, fechaHasta:Date):number{
        let totalKilometrosRecorridos:number = 0
        this.hojas.forEach(hoja => {
            if(hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta){
                totalKilometrosRecorridos += hoja.calcularTotalKilometros()
            }
        })
        return totalKilometrosRecorridos
    }
}