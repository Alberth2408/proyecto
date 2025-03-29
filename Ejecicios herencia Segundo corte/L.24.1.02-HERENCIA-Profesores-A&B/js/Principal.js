import Cl_Fijo from './Cl_Fijo.js'
import Cl_Contratado from './Cl_Contratado.js'

let fijo1 = new Cl_Fijo(25, 'Carlos', 100)
let fijo2 = new Cl_Fijo(40, 'Carolina', 90)

let contratado1 = new Cl_Contratado(30, 'Rafael', 15)
let contratado2 = new Cl_Contratado(30, 'Felicia', 20)

let salida = document.getElementById('salida')

let mostrarProfesor = (profesor) => {
  return `
    <tr>
        <td>${profesor.nombre}</td>
        <td>${profesor.bono}</td>
        <td>${profesor.sueldo || '-'}</td>
        <td>${profesor.horas || '-'}</td>
        <td>${profesor.ingresoTotal()}</td>
    </tr>
    `
}

salida.innerHTML = `
<table>
    <tr>
        <th>Nombre</th>
        <th>Bono</th>
        <th>Sueldo</th>
        <th>Horas</th>
        <th>Ingreso Total</th>
    </tr>
    ${mostrarProfesor(fijo1)}
    ${mostrarProfesor(fijo2)}
    ${mostrarProfesor(contratado1)}
    ${mostrarProfesor(contratado2)}
</table>
`
