import Cl_articulo from "./Cl_articulo.js";

export default class Cl_viveres extends Cl_articulo {
    constructor(nombre, costo, basico) {
        super(nombre, costo);
        this.basico = basico;
    }
porcGanancia(){
    if (this.basico === 1){
        return 5 / 100;
    }
    else
    if (this.basico === 2){
        return super.porcGanancia();
    }
}
} 