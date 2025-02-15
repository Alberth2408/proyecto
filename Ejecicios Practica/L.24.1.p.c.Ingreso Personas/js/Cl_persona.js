export default class Cl_persona {
  constructor(n, i) {
    this.nombre = n
    this.ingreso = i
  }

  set nombre(n) {
    this._nombre = n
  }

  get nombre() {
    return this._nombre
  }

  set ingreso(i) {
    this._ingreso = +i
  }

  get ingreso() {
    return this._ingreso
  }
}
