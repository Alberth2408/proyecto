import Cl_vArticulo from "./Cl_vArticulo.js"
import Cl_mArticulo from "./Cl_mArticulo.js"
export default class Cl_vBodega {

    constructor() {
        this.controlador = null
        this.Cl_mArticulo = null
        this.Cl_vArticulo = new Cl_vArticulo()
        this.btAgregar = document.getElementById("btAgregar");
        this.salida = document.getElementById("salida");
        this.btAgregar.onclick = () => this.controlador.agregarArticulo();
    }
    agregarArticulo() {
        this.mArticulo = new Cl_mArticulo({
            costo: this.Cl_vArticulo.costo
        })
        return this.mArticulo
    }
    reportarArticulo(totalGanancia) {
        this.salida.innerHTML += `
        La Ganancia sera de Bs. ${totalGanancia}
        <br>
      `
    }
}