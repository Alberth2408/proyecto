import Cl_persona from "./Cl_persona.js"
import Cl_grupo from "./Cl_grupo.js"

let persona1 = new Cl_persona("Mary", 150),
  persona2 = new Cl_persona("Jose", 135),
  persona3 = new Cl_persona("Carlos", 160),
  persona4 = new Cl_persona("Pedro", 75)

let grupo = new Cl_grupo()

grupo.procesarPersona(persona1)
grupo.procesarPersona(persona2)
grupo.procesarPersona(persona3)
grupo.procesarPersona(persona4)

alert(
  `Monto del ingreso menor: ${
    grupo.auxIngreso
  } | Ingreso promedio: ${grupo.ingresoPromedio()}`
)
