export default class Cl_mEdades {
    constructor({edad}) {
        this.edad = edad
    }
    set edad(edad){
        this._edad = +edad
    }
    get edad(){
        return this._edad
    }
}