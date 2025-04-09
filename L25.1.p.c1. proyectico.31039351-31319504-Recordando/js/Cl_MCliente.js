export default class MCliente {
  constructor(codigo, costoB) {
    this.codigo = codigo
    this.costoB = costoB
  }

  set codigo(c) {
    this._codigo = +c
  }
  get codigo() {
    return this._codigo
  }

  set costoB(cb) {
    this._costoB = +cb
  }
  get costoB() {
    return this._costoB
  }
}
