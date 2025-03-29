import Cl_Becado from './Cl_Becado.js'

let becado1 = new Cl_Becado('Mary', 132, 8)
let becado2 = new Cl_Becado('Alirio', 315, 35)

let salida = document.getElementById('salida')

let mostrarEstudiante = (estudiante) => {
  return `
      <tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.notas}</td>
        <td>${estudiante.materias}
        <td>${estudiante.promedioNotas()}</td>
        <td>${estudiante.becado()}</td>
      </tr>
      `
}

salida.innerHTML = `
  <table>
      <tr>
          <th>Nombre</th>
          <th>Notas</th>
          <th>Materias</th>
          <th>Promedio Notas</th>
          <th>Beca</th>
      </tr>
      ${mostrarEstudiante(becado1)}
      ${mostrarEstudiante(becado2)}
  </table>
  `
