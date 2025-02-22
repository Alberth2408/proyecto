/* Conociendo la edad de varias personas, indicar la edad promedio.
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18
La salida requerida presenta el siguiente formato: 
La edad promedio es 17 
*/

import cl_vPersonas from "./Cl_vPersonas.js"
import cl_mPersonas from "./Cl_mPersonas.js"
import cl_controlador from "./Cl_Controlador.js"

export default class Cl_index {
    constructor() {
        let vista = new cl_vPersonas()
        let modelo = new cl_mPersonas()
        let controlador = new cl_controlador(modelo, vista)
        vista.controlador = controlador
    }
}