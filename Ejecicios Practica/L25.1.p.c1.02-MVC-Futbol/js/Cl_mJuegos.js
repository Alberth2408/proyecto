export default class cl_mjuegos {
    constructor({resultados}) {
        
        this.resultados = resultados;
    }
    set resultados(resultados) {
        this._resultados = +resultados;
    }
    get resultados() {
        return this._resultados;
    }
}