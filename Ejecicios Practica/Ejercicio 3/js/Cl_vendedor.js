export default class Cl_vendedor {
  constructor(n, mV) {
    this.nombre = n
    this.montoVenta = mV
  }

  set nombre(n) {
    this._nombre = n
  }

  get nombre() {
    return this._nombre
  }

  set montoVenta(mV) {
    this._montoVenta = +mV
  }

  get montoVenta() {
    return this._montoVenta
  }
}
