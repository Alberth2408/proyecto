import Cl_Empleado from './Cl_Empleado.js'
export default class Cl_Administrador extends Cl_Empleado {
  constructor(sueldoBase, primaFija) {
    super(sueldoBase)
    this.primaFija = primaFija
  }

  calcularSueldo() {
    return this.sueldoBase + this.primaFija
  }
}
