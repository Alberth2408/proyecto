/* 
Una tienda planea incrementar el 20% del costo para establecer el precio de venta de sus
artículos (1=ropa, 2=víveres), conociendo su nombre y costo. Para la ropa de color rojo
(1=blanco, 2=azul, 3=rojo) otorgará un 10% de descuento. Los víveres no tienen
descuento, pero si es un producto básico, sólo aplicará un 5% del costo para la ganancia.
*/
import Cl_ropa from "./Cl_ropa.js";
import Cl_viveres from "./Cl_viveres.js";


    let ropa1 = new Cl_ropa("camisa", 20, 2);
    let ropa2 = new Cl_ropa("short", 20, 3);
    let ropa3 = new Cl_ropa("blusa", 40, 3);
    let viveres1 = new Cl_viveres("leche", 10, 1);
    let viveres2 = new Cl_viveres("toddy", 30, 2);
    
    console.log(`Nombre: ${ropa1.nombre}, Descuento: ${ropa1.descuento()}, Precio: $${ropa1.precio()}`)
    console.log(`Nombre: ${ropa2.nombre}, Descuento: ${ropa2.descuento()}, Precio: $${ropa2.precio()}`)
    console.log(`Nombre: ${ropa3.nombre}, Descuento: ${ropa3.descuento()}, Precio: $${ropa3.precio()}`)
    console.log(`Nombre: ${viveres1.nombre}, Ganancia: ${viveres1.ganancia()}, Precio: $${viveres1.precio()}`)
    console.log(`Nombre: ${viveres2.nombre}, Ganancia: ${viveres2.ganancia()}, Precio: $${viveres2.precio()}`)