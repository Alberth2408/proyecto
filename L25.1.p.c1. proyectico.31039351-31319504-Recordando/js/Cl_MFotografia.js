import MCliente from './Cl_MCliente.js'
export default class MFotografia extends MCliente {
  constructor({ codigo, costoB, tipo }) {
    super(codigo, costoB)
    this.tipo = tipo
  }
  set tipo(t) {
    this._tipo = t
  }
  get tipo() {
    return this._tipo
  }

  descuento() {
    return this.costoB * 0.18
  }
  incremento() {
    return this.costoB * 0.13
  }
  precio() {
    if (this.tipo == 'D') {
      return this.costoB - this.descuento()
    } else if (this.tipo == 'I') {
      return this.costoB + this.incremento()
    }
  }
}
