import Cl_mEstudiante from './Cl_mEstudiante.js'
import Cl_vEstudiante from './Cl_vEstudiante.js'

export default class Cl_vExamen {
  constructor() {
    this.controlador = null
    this.mEstudiante = null
    this.vEstudiante = new Cl_vEstudiante()
    this.vista = document.getElementById('mainForm')
    this.table = document.getElementById('mainFormTable')
    this.btAgregar = document.getElementById('btAgregar')
    this.lblporcAprobados = document.getElementById('porcAprobados')
    this.lblmejorNota = document.getElementById('mejorNota')
    this.lblporcChicasAprobados = document.getElementById('porcChicasAprobados')
    this.lblporcHombres = document.getElementById('porcHombres')
    this.lblpromNotas = document.getElementById('promNotas')
    this.lblcantHombres = document.getElementById('cantHombres')
    this.btAgregar.onclick = () => this.ocultar()
    this.vEstudiante.btAceptar.onclick = () =>
      this.controlador.agregarEstudiante()
    this.mostrar()
  }
  agregarEstudiante() {
    this.mEstudiante = new Cl_mEstudiante({
      cedula: this.vEstudiante.cedula,
      nombre: this.vEstudiante.nombre,
      sexo: this.vEstudiante.sexo,
      nota: this.vEstudiante.nota,
    })
    this.mostrar()
    return this.mEstudiante
  }

  mostrar() {
    this.vista.hidden = false
    this.vEstudiante.ocultar()
  }

  ocultar() {
    this.vista.hidden = true
    this.vEstudiante.mostrar()
  }

  reporteEstudiante(
    porcAprobados,
    mejorNota,
    porcChicasAprobados,
    porcHombres,
    promNotas,
    cantHombres
  ) {
    this.table.innerHTML += `
        <tr>
          <td>${this.mEstudiante.cedula}</td>
          <td>${this.mEstudiante.nombre}</td>
          <td>${this.mEstudiante.sexo}</td>
          <td>${this.mEstudiante.nota}</td>
        </tr>
    `
    this.lblporcAprobados.innerHTML = porcAprobados
    this.lblmejorNota.innerHTML = mejorNota
    this.lblporcChicasAprobados.innerHTML = porcChicasAprobados
    this.lblporcHombres.innerHTML = porcHombres
    this.lblpromNotas.innerHTML = promNotas
    this.lblcantHombres.innerHTML = cantHombres
  }
}
