import cl_vEdades from "./Cl_vEdades.js"
import cl_mEdades from "./Cl_mEdades.js"
export default class Cl_vPersonas {

    constructor() {
        this.controlador = null
        this.mEdades = null
        this.vEdades = new cl_vEdades()
        this.btAgregar = document.getElementById("btAgregar");
        this.salida = document.getElementById("salida");
        this.btAgregar.onclick = () => this.controlador.agregarEdades()
    }

    agregarEdades() {
        this.mEdades = new cl_mEdades({
            edad: this.vEdades.edad
        })
        return this.mEdades
    }
    reporteEdades(promedio) {
        this.salida.innerHTML += `
        La edad promedio es de: ${promedio}
        <br>
        `
    }
}
