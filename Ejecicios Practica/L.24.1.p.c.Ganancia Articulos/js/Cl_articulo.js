export default class Cl_articulo {
  constructor(c, co, pV) {
    this.codigo = c
    this.costo = co
    this.precioVenta = pV
  }

  set codigo(c) {
    this._codigo = +c
  }

  get codigo() {
    return this._codigo
  }

  set costo(co) {
    this._costo = +co
  }

  get costo() {
    return this._costo
  }

  set precioVenta(pV) {
    this._precioVenta = +pV
  }

  get precioVenta() {
    return this._precioVenta
  }
}
