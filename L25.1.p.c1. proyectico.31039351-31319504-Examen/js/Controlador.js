export default class Controlador {
  constructor(modelo, vista) {
    this.modelo = modelo
    this.vista = vista
  }
  agregarEstudiante() {
    this.modelo.procesarEstudiante(this.vista.agregarEstudiante())
    this.vista.reporteEstudiante(
      this.modelo.porcentajeaprobados(),
      this.modelo.estudiantemejornota(),
      this.modelo.porcentajechicasaprob(),
      this.modelo.porcentajehombres(),
      this.modelo.promedionotas(),
      this.modelo.conthombres
    )
  }
}
