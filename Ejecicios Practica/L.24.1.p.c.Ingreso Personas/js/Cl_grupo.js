export default class Cl_grupo {
  constructor() {
    this.contPersona = 0
    this.acumIngreso = 0
    this.menor = Infinity
    this.auxIngreso = 0
  }

  procesarPersona(p) {
    this.contPersona++
    this.acumIngreso += p.ingreso
    if (p.ingreso < this.menor) {
      this.menor = p.ingreso
      this.auxIngreso = p.ingreso
    }
  }

  ingresoPromedio() {
    return this.acumIngreso / this.contPersona
  }
}
