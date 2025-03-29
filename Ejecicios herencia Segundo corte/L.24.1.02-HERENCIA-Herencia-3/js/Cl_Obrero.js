import Cl_Empleado from './Cl_Empleado.js'
export default class Cl_Obrero extends Cl_Empleado {
  constructor(sueldoBase, horasExtras) {
    super(sueldoBase)
    this.horasExtras = horasExtras
  }

  calcularSueldo() {
    return this.sueldoBase + this.horasExtras * 2
  }
}
