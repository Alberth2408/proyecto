export default class VVideo {
  constructor() {
    this.vista = document.getElementById('formPVideo')
    this.inCodigo = document.getElementById('codigoV')
    this.inCostoBase = document.getElementById('costoBaseV')
    this.selHD = document.getElementById('hdV')
    this.btAceptar = document.getElementById('agregarVid')
  }

  get codigo() {
    return +this.inCodigo.value
  }

  get costoB() {
    return +this.inCostoBase.value
  }

  get hd() {
    return this.selHD.value
  }

  mostrar() {
    this.vista.hidden = false
  }

  ocultar() {
    this.vista.hidden = true
  }
}
