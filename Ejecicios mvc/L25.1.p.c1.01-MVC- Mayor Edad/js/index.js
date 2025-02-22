import VDatos from './vDatos.js'
import MDatos from './mDatos.js'
import Controlador from './controlador.js'

export default class Index {
  constructor() {
    let vista = new VDatos()
    let modelo = new MDatos()
    let controlador = new Controlador(modelo, vista)
    vista.controlador = controlador
  }
}
