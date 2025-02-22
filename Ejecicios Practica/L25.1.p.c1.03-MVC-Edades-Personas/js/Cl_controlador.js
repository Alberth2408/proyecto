export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista
    }
    agregarEdades() {
        this.modelo.procesar(this.vista.agregarEdades());
        this.vista.reporteEdades(
            this.modelo.promedio()
        )
    }
}