import Cl_vendedor from "./Cl_vendedor.js"
import Cl_ventas from "./Cl_Ventas.js"

let vendedor1 = new Cl_vendedor("Mary", 150),
  vendedor2 = new Cl_vendedor("Jose", 135),
  vendedor3 = new Cl_vendedor("Carlos", 160),
  vendedor4 = new Cl_vendedor("Pedro", 75)

let venta = new Cl_ventas()

venta.procesarVendedor(vendedor1)
venta.procesarVendedor(vendedor2)
venta.procesarVendedor(vendedor3)
venta.procesarVendedor(vendedor4)

alert(
  `Cantidad de ventas que fueron por 100$ o menos: ${venta.cantVenMen} 
  | Cantidad de ventas mayores a 100$: ${venta.cantVenMay} 
  | Monto total de las ventas: ${venta.acumMontoV}$`
)
