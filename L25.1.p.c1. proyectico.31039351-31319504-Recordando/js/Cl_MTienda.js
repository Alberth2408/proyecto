import MFotografia from './Cl_MFotografia.js'
import MVideo from './Cl_MVideo.js'

export default class MTienda {
  constructor() {
    this.acumVentas = 0
    this.contFotosDi = 0
    this.acumVentFotosDi = 0
  }

  procesarPromocion(p) {
    this.acumVentas += p.precio()
    if (p instanceof MFotografia) {
      if (p.tipo == 'D') {
        this.contFotosDi++
        this.acumVentFotosDi += p.precio()
      }
    }
    // else if (p instanceof MVideo) {
    //   if (p.hd == 'SI') {
    //   }
    // }
  }
  promVentFotosDi() {
    return this.acumVentFotosDi / this.contFotosDi
  }
}
