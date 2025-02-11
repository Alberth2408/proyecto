/**
 2. VENTAS
Se desea llevar un control de las ventas que realiza
una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se
requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para
el costo de cada venta.
Estructuras de datos recomendadas
 Cl_tienda: montoCaja, porcIncremento
 Cl_venta: cliente, factura, costo, cnArticulos
Primeros requerimientos
 Monto final en caja
 Cliente que pagó el monto mayor
 Cantidad de clientes que sólo llevaron 1 artículo 
Datos de inicialización para Cl_tienda  montoCaja: 200,  porcIncremento: 25.00 
Ventas de prueba  cliente: 'Luis',  factura: 1111,  costo: 100,  cnArticulos: 3  cliente: 'Carla',  factura: 2222,  costo: 50,  cnArticulos: 1  cliente: Mery',  factura: 3333,  costo: 200,  cnArticulos: 10 
 */

import cl_tienda from "./cl_tienda.js";
import cl_ventas from "./cl_venta.js";

let vent1 =new cl_ventas("Luis", 11, 100, 3)
let vent2=new cl_ventas("Carla", 22, 50, 1)
let vent3=new cl_ventas                        