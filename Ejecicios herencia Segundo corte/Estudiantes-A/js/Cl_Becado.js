import Cl_Estudiante from './Cl_Estudiante.js'
export default class Cl_Becado extends Cl_Estudiante {
  constructor(nombre, notas, materias) {
    super(nombre, notas, materias)
  }

  becado() {
    if (this.promedioNotas() >= 15) {
      return `${this.nombre} recibe una beca de: ` + 30
    } else if (this.promedioNotas() >= 10) {
      return `${this.nombre} recibe una beca de: ` + 15
    } else {
      return `${this.nombre} no le corresponde beca`
    }
  }
}
