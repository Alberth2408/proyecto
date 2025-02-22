export default class MPersona {
  constructor({ nombre, edad }) {
    this.nombre = nombre
    this.edad = edad
  }
  set nombre(n) {
    this._nombre = n
  }
  get nombre() {
    return this._nombre
  }
  set edad(e) {
    this._edad = +e
  }
  get edad() {
    return this._edad
  }
}
