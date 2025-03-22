import Cl_articulo from "./Cl_articulo.js"

export default class Cl_ropa extends Cl_articulo {
    constructor(nombre, costo, color) {
        super(nombre, costo);
        this.color = color;
    }
porcDescuento(){
    return this.color === 3 ? 0.10 : 0;
}
}