export default class Cl_articulo {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
porcDescuento(){
    return 0;
}
porcGanancia(){
    return 20 / 100;
}
ganancia(){
    return this.costo * this.porcGanancia();
}
descuento(){
    return this.costo * this.porcDescuento();
}
precio(){
    return this.costo + (this.ganancia() - this.descuento());
}  
}