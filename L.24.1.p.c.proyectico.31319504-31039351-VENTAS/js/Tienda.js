export default class CL_Tienda{
    constructor(montCaja, porcIncremento){
        this.montCaja = montCaja;
        this.porcIncremento = porcIncremento;
        this.acuVentas = 0;
        this.ventaMayor = 0;
        this.clienteMayor = "";
        this.cntClientes1 = 0;
    }

    procesarVentas(vents){
        this.acuVentas += (vents.costoT + (vents.costoT * (this.porcIncremento / 100)))

        if (vents.costoT > this.ventaMayor){
            this.ventaMayor = vents.costoT
            this.clienteMayor = vents.nombre
        }

        if (vents.cantArts === 1)
            this.cntClientes1++
    }

    montFinalCaja(){
        return this.acuVentas
    }

    mayorPago(){
        return this.clienteMayor
    }

    cantCliente1Art(){
        return this.cntClientes1
    }
}