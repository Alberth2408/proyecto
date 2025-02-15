//330-245 = 85
export default class Cl_tienda {
  constructor() {
    this.acumCos = 0
    this.acumPV = 0
    this.auxCodigo = 0
    this.mayor = 0
  }

  procesarArticulo(a) {
    this.acumCos += a.costo
    this.acumPV += a.precioVenta
    if (a.precioVenta > this.mayor) {
      this.mayor = a.precioVenta
      this.auxCodigo = a.codigo
    }
  }

  gananciaTotal() {
    return this.acumPV - this.acumCos
  }
}
