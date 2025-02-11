/**
 * VENTAS
Se desea llevar un control de las ventas que realiza
una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se
requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para
el costo de cada venta.

Primeros requerimientos
Monto final en caja
Cliente que pagó el monto mayor
Cantidad de clientes que sólo llevaron 1 artículo

Datos de inicialización para Cl_tienda
montoCaja: 200,
porcIncremento: 25.00

Ventas de prueba
cliente: 'Luis',
factura: 1111,
costo: 100,
cnArticulos: 3

cliente: 'Carla',
factura: 2222,
costo: 50,
cnArticulos: 1

cliente: Mery',
factura: 3333,
costo: 200,
cnArticulos: 10
 */

import CL_Ventas from "./Ventas.js";
import CL_Tienda from "./Tienda.js";

let Vent1 = new CL_Ventas("Luis", 11, 100, 3),
    Vent2 = new CL_Ventas("Carla", 22, 50, 1),
    Vent3 = new CL_Ventas("Mery", 33, 200, 10);

let tie = new CL_Tienda(200, 25);

tie.procesarVentas(Vent1);
tie.procesarVentas(Vent2);
tie.procesarVentas(Vent3);

let salida = document.getElementById("salida")

salida.innerHTML = `reporte
<br>Monto final en caja: ${(tie.montFinalCaja().toFixed(2))}$
<br>Cliente que pagó el monto mayor: ${tie.mayorPago()}
<br>Cantidad de clientes que sólo llevaron 1 artículo: ${tie.cantCliente1Art()}
`