export default class VFotografia {
  constructor() {
    this.vista = document.getElementById('formPFotografia')
    this.inCodigo = document.getElementById('codigoF')
    this.inCostoBase = document.getElementById('costoBaseF')
    this.selTipo = document.getElementById('tipoF')
    this.btAceptar = document.getElementById('agregarFot')
  }

  get codigo() {
    return +this.inCodigo.value
  }

  get costoB() {
    return +this.inCostoBase.value
  }

  get tipo() {
    return this.selTipo.value
  }

  mostrar() {
    this.vista.hidden = false
  }

  ocultar() {
    this.vista.hidden = true
  }
}
