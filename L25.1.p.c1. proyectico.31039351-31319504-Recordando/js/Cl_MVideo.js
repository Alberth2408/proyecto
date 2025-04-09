import MCliente from './Cl_MCliente.js'
export default class MVideo extends MCliente {
  constructor({ codigo, costoB, hd }) {
    super(codigo, costoB)
    this.hd = hd
  }
  set hd(h) {
    this._hd = h
  }
  get hd() {
    return this._hd
  }

  incremento() {
    if (this.hd == 'SI') {
      return this.costoB * 0.2
    } else {
      return 0
    }
  }

  precio() {
    return this.costoB + this.incremento()
  }
}
