import Cl_articulo from "./Cl_articulo.js"
import Cl_tienda from "./Cl_tienda.js"

let articulo1 = new Cl_articulo(888, 10, 15),
  articulo2 = new Cl_articulo(777, 20, 25),
  articulo3 = new Cl_articulo(999, 15, 25),
  articulo4 = new Cl_articulo(666, 25, 35),
  articulo5 = new Cl_articulo(111, 50, 70),
  articulo6 = new Cl_articulo(333, 40, 50),
  articulo7 = new Cl_articulo(444, 80, 100),
  articulo8 = new Cl_articulo(222, 5, 10)

let tienda = new Cl_tienda()

tienda.procesarArticulo(articulo1)
tienda.procesarArticulo(articulo2)
tienda.procesarArticulo(articulo3)
tienda.procesarArticulo(articulo4)
tienda.procesarArticulo(articulo5)
tienda.procesarArticulo(articulo6)
tienda.procesarArticulo(articulo7)
tienda.procesarArticulo(articulo8)

alert(
  `Ganancia Total: ${tienda.gananciaTotal()} | Codigo del articulo con mayor precio de venta: ${
    tienda.auxCodigo
  }`
)
