export default class Cl_vEstudiante {
  constructor() {
    this.vista = document.getElementById('estudianteForm')
    this.inCedula = document.getElementById('eCedula')
    this.inNombre = document.getElementById('eNombre')
    this.inSexo = document.getElementById('eSexo')
    this.inNota = document.getElementById('eNota')
    this.btAceptar = document.getElementById('btAceptar')
  }

  get cedula() {
    return this.inCedula.value
  }

  get nombre() {
    return this.inNombre.value
  }

  get sexo() {
    return this.inSexo.value
  }

  get nota() {
    return +this.inNota.value
  }

  mostrar() {
    this.vista.hidden = false
  }

  ocultar() {
    this.vista.hidden = true
  }
}
