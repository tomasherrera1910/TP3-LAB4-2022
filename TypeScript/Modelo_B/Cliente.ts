import {Factura} from './Factura'

export class Cliente{
    numero: number
    razonSocial: string
    cuit: number
    facturas: Factura[]

    constructor(){
        this.numero = 0
        this.razonSocial = ''
        this.cuit = 0
        this.facturas = []
    }

    totalFacturadoXTipoPago(tipoPago:string):number{
        let total:number = 0
        if(tipoPago === 'E' || tipoPago === 'TD' || tipoPago === 'TC' || tipoPago === 'CC' || tipoPago === 'TR'){
            const facturasTipoPago = this.facturas.filter(factura => factura.tipoPago === tipoPago) 
            facturasTipoPago.forEach(factura => {
                total += factura.calcularTotalFinal() 
        })   
        }else{
            this.facturas.forEach(factura => {
                total += factura.calcularTotalFinal() 
        })
            console.log(`EL TIPO DE PAGO INGRESADO NO ES VÁLIDO PERO EL TOTAL GASTADO POR EL CLIENTE SIN IMPORTAR TIPO DE PAGO ES DE ${total}`)
        }
        return total
    }
}