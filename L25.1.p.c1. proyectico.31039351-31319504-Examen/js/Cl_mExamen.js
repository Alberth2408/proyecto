export default class Cl_mExamen {
  constructor() {
    this.valor = 20
    this.minaprob = 9.6
    this.contaprob = 0
    this.contchicas = 0
    this.conthombres = 0
    this.contchicasaprob = 0
    this.mejornota = 0
    this.contestudiantes = 0
    this.nombmejornota = ''
    this.acumNota = 0
  }

  procesarEstudiante(estudiante) {
    this.contestudiantes++
    this.acumNota += estudiante.nota
    if (estudiante.nota >= this.minaprob) {
      this.contaprob++
    }
    if (estudiante.sexo === 'F') {
      this.contchicas++
    }
    if (estudiante.sexo === 'M') {
      this.conthombres++
    }
    if (estudiante.sexo === 'F' && estudiante.nota >= this.minaprob) {
      this.contchicasaprob++
    }
    if (estudiante.nota > this.mejornota) {
      this.mejornota = estudiante.nota
      this.nombmejornota = estudiante.nombre
    }
  }
  porcentajeaprobados() {
    return (this.contaprob / this.contestudiantes) * 100
  }
  porcentajechicasaprob() {
    return (this.contchicasaprob / this.contchicas) * 100
  }
  porcentajehombres() {
    return (this.conthombres / this.contestudiantes) * 100
  }
  estudiantemejornota() {
    return this.nombmejornota
  }
  promedionotas() {
    return this.acumNota / this.contestudiantes
  }
}
