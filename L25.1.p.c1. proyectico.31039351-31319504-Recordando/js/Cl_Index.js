import VTienda from './Cl_VTienda.js'
import MTienda from './Cl_MTienda.js'
import Controlador from './Cl_Controlador.js'

export default class Index {
  constructor() {
    let vista = new VTienda()
    let modelo = new MTienda()
    let controlador = new Controlador(modelo, vista)
    vista.controlador = controlador
  }
}
