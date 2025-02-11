export default class cl_tienda{
    constructor(montCaja, porcincremento){
        this.montCaja= montCaja;
        this.porcincremento= porcincremento;
        this.acuVentas= 0;
        this.ventaMayor= 0;
        this.clienteMayor= "";
        this.cntClientes1=0;

    }
    procesarVentas(vents){
        this.acuVentas += (vents.costoT +(vents.costoT * this.porcincremento))

        if (this.acuVentas< vents.costoT){
            this.acuVentas = vents.costoT
            this.ventaMayor = vents.nombre
        }
        if (vents.cantArts ===1)
            this.cntClientes1++

    }
}