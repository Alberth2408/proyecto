export default class Cl_mEstudiante {
  constructor({ cedula, nombre, sexo, nota }) {
    this.cedula = cedula
    this.nombre = nombre
    this.sexo = sexo
    this.nota = nota
  }
  get cedula() {
    return this._cedula
  }
  get nombre() {
    return this._nombre
  }
  get sexo() {
    return this._sexo
  }
  get nota() {
    return this._nota
  }
  set cedula(cedula) {
    this._cedula = cedula
  }
  set nombre(nombre) {
    this._nombre = nombre
  }
  set sexo(sexo) {
    this._sexo = sexo
  }
  set nota(nota) {
    this._nota = +nota
  }
}
