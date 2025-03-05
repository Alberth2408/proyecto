/**
 * EXAMEN
Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio. 

Primeros requerimientos
Porcentaje de aprobados
Estudiante con la mejor nota
Porcentaje de chicas aprobadas 

Datos de inicialización para Cl_examen  
Nombre
valor: 20,  
minAprueba: 9.6 

Estudiantes de prueba  
nombre: 'Luis'  cedula: 1111  sexo: 'M'  nota: 12  
nombre: 'Carla'  cedula: 2222  sexo: 'F'  nota: 16.5  
nombre: Mery'  cedula: 3333  sexo: 'F'  nota: 8 

PREGUNTAS TIPO DEFENSA:
- Cantidad de hombres
- Porcentaje de hombres
- Nota promedio
 */

import Cl_mExamen from './Cl_mExamen.js'
import Cl_vExamen from './Cl_vExamen.js'
import Controlador from './Controlador.js'

export default class Index {
  constructor() {
    let vista = new Cl_vExamen()
    let modelo = new Cl_mExamen()
    let controlador = new Controlador(modelo, vista)
    vista.controlador = controlador
  }
}
