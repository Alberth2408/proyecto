import Cl_Profesor from './Cl_Profesor.js'
export default class Cl_Contratado extends Cl_Profesor {
  constructor(bono, nombre, horas) {
    super(bono, nombre)
    this.horas = horas
  }

  ingresoTotal() {
    return this.bono + this.horas * 10
  }
}
