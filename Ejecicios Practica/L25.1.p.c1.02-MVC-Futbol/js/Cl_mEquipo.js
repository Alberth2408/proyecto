export default class cl_mEquipo {
    constructor() {
        this.conJuegos = 0
        this.conGanados = 0
    }
    procesar(juegos) {
        this.conJuegos++

        if (juegos.resultados === 1 ) {
            this.conGanados++
        }
        
    }
    porcentaje() {
        return (this.conGanados / this.conJuegos) * 100
    }
}