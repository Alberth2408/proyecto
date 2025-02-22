import cl_vJuegos from "./Cl_vJuegos.js"
import cl_mJuegos from "./Cl_mJuegos.js"
export default class cl_vEquipo {

    constructor() {
        this.controlador = null
        this.mJuegos = null
        this.vJuegos = new cl_vJuegos()
        this.btAgregar = document.getElementById("btAgregar");
        this.salida = document.getElementById("salida");
        this.btAgregar.onclick = () => this.controlador.agregarNumeroDeJuegos();
    }
    agregarNumeroDeJuegos() {
        this.mJuegos = new cl_mJuegos({
            resultados: this.vJuegos.resultados
        })
        return this.mJuegos
    }
    reportarNumeroDeJuegos(porcentaje) {
        this.salida.innerHTML += `
        Ganaste el: ${porcentaje}% de los juegos
        <br>
      `
    }
}