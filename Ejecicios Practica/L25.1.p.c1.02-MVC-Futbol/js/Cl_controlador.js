export default class cl_controlador {

    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista
    }
    agregarNumeroDeJuegos() {
        this.modelo.procesar(this.vista.agregarNumeroDeJuegos())
        this.vista.reportarNumeroDeJuegos(
            this.modelo.porcentaje()
        )
    }
}