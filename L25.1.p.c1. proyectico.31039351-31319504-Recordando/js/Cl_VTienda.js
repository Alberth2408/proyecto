import MFotografia from './Cl_MFotografia.js'
import MVideo from './Cl_MVideo.js'
import VFotografia from './Cl_VFotografia.js'
import VVideo from './Cl_VVideo.js'

export default class VTienda {
  constructor() {
    this.controlador = null
    this.mFotografia = null
    this.mVideo = null
    this.vFotografia = new VFotografia()
    this.vVideo = new VVideo()
    this.vista = document.getElementById('formTienda')
    this.tabla = document.getElementById('formTabla')
    this.btAgregarFot = document.getElementById('nuevaFot')
    this.btAgregarVid = document.getElementById('nuevoVid')
    this.lblTotalVendido = document.getElementById('formTotalVendido')
    this.lblNumFotDig = document.getElementById('formNumFotDig')
    this.lblStFotDig = document.getElementById('formStFotDig')
    this.lblPromFDigVendidas = document.getElementById('formPromFDigVendidas')
    this.btAgregarFot.onclick = () => {
      this.ocultar()
      this.vFotografia.mostrar()
    }
    this.btAgregarVid.onclick = () => {
      this.ocultar()
      this.vVideo.mostrar()
    }
    this.vFotografia.btAceptar.onclick = () =>
      this.controlador.agregarFotografia()
    this.vVideo.btAceptar.onclick = () => this.controlador.agregarVideo()
    this.mostrar()
    this.vFotografia.ocultar()
    this.vVideo.ocultar()
  }

  agregarFotografia() {
    this.mFotografia = new MFotografia({
      codigo: this.vFotografia.codigo,
      costoB: this.vFotografia.costoB,
      tipo: this.vFotografia.tipo,
    })
    this.mostrar()
    this.vFotografia.ocultar()
    return this.mFotografia
  }

  agregarVideo() {
    this.mVideo = new MVideo({
      codigo: this.vVideo.codigo,
      costoB: this.vVideo.costoB,
      hd: this.vVideo.hd,
    })
    this.mostrar()
    this.vVideo.ocultar()
    return this.mVideo
  }

  mostrar() {
    this.vista.hidden = false
  }

  ocultar() {
    this.vista.hidden = true
  }

  reporteFotografia(
    totalVendido,
    contFotosDig,
    subTFotDig,
    promFotosDVendidas
  ) {
    this.tabla.innerHTML += `
        <tr>
          <td>${this.mFotografia.codigo}</td>
          <td>${this.mFotografia.costoB}</td>
          <td>${this.mFotografia.tipo}</td>
          <td>${'--'}</td>
          <td>${this.mFotografia.precio()}</td>
        </tr>
    `
    this.lblTotalVendido.innerHTML = totalVendido.toFixed(2)
    this.lblNumFotDig.innerHTML = contFotosDig
    this.lblStFotDig.innerHTML = subTFotDig.toFixed(2)
    this.lblPromFDigVendidas.innerHTML = promFotosDVendidas.toFixed(2)
  }

  reporteVideo(totalVendido) {
    this.tabla.innerHTML += `
        <tr>
          <td>${this.mVideo.codigo}</td>
          <td>${this.mVideo.costoB}</td>
          <td>${'--'}</td>
          <td>${this.mVideo.hd}</td>
          <td>${this.mVideo.precio()}</td>
        </tr>
    `
    this.lblTotalVendido.innerHTML = totalVendido.toFixed(2)
  }
}
