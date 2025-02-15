export default class Cl_ventas {
  constructor() {
    this.cantVenMen = 0
    this.cantVenMay = 0
    this.acumMontoV = 0
  }

  procesarVendedor(v) {
    if (v.montoVenta <= 100) {
      this.cantVenMen++
    } else if (v.montoVenta > 100) {
      this.cantVenMay++
    }

    this.acumMontoV += v.montoVenta
  }
}
