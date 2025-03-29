import Cl_Profesor from './Cl_Profesor.js'
export default class Cl_Fijo extends Cl_Profesor {
  constructor(bono, nombre, sueldo) {
    super(bono, nombre)
    this.sueldo = sueldo
  }

  ingresoTotal() {
    return this.bono + this.sueldo
  }
}
