import Cl_Administrador from './Cl_Administrador.js'
import Cl_Obrero from './Cl_Obrero.js'

let obrero1 = new Cl_Obrero(1000, 5)
let obrero2 = new Cl_Obrero(1500, 10)
let admin1 = new Cl_Administrador(2000, 500)
let admin2 = new Cl_Administrador(2500, 700)

let salida = document.getElementById('salida')

salida.innerHTML += `
    <br>El sueldo del obrero 1 es: ${obrero1.calcularSueldo()}
    <br>El sueldo del obrero 2 es: ${obrero2.calcularSueldo()}
    <br>El sueldo del administrador 1 es: ${admin1.calcularSueldo()}
    <br>El sueldo del administrador 2 es: ${admin2.calcularSueldo()}
`
