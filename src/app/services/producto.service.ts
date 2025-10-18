import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../model/Producto';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  detalleProductoEmitter = new EventEmitter<Producto>();

  productos: {[llave:string]:Producto} = {};

  constructor(private datosService: DatosService){
  }

  listarProductos(){
    return this.datosService.getProductos();
  }

  //Usado para agregar o modificar un producto existente
    guardarProducto(producto: Producto) {
      //if(producto.id === null){
        //caso de agregacion

        //producto.id = this.idSiguiente++;
        //this.productos.push(producto);
      //}//else{
        //caso de modificacion

        //const indice = this.productos.findIndex(p => p.id === producto.id);

        //if(indice !== -1){
         // this.productos[indice] = producto;
        //}
      //}
  }

    getProductoByLlave(llave: string): Producto | undefined {
      return undefined;
      //return this.productos.find(producto => producto.id === id);
    }

  eliminarProducto(id:number){
    //const indice = this.productos.findIndex(producto => producto.id === id);
    //if(indice !== -1){
      //this.productos.splice(indice,1);
    //}
  }
}
