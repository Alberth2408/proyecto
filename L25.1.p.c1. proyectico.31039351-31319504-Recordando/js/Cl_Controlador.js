export default class Controlador {
  constructor(modelo, vista) {
    this.modelo = modelo
    this.vista = vista
  }
  agregarFotografia() {
    this.modelo.procesarPromocion(this.vista.agregarFotografia())
    this.vista.reporteFotografia(
      this.modelo.acumVentas,
      this.modelo.contFotosDi,
      this.modelo.acumVentFotosDi,
      this.modelo.promVentFotosDi()
    )
  }

  agregarVideo() {
    this.modelo.procesarPromocion(this.vista.agregarVideo())
    this.vista.reporteVideo(this.modelo.acumVentas)
  }
}
