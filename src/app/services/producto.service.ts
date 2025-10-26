import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../model/Producto';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  detalleProductoEmitter = new EventEmitter<Producto>();

  productos: {[llave:string]:Producto} = {};

  //Observable para notificar cambios
  productosActualizados = new Subject<{[llave:string]:Producto}>();

  constructor(private datosService: DatosService){
  }

  listarProductos(){
    return this.datosService.getProductos();
  }

  //Usado para agregar o modificar un producto existente
    guardarProducto(producto: Producto, llave:string | null) {
    if(llave === null){
      //caso agregar
      this.datosService.guardarProducto(producto).subscribe( () => {
        console.log("Se agrego el nuevo producto ",producto.descripcion + " " + producto.precio);
        this.refreshProductos();
      });
    }else{
        this.datosService.modificarProducto(producto, llave!).subscribe(() => {
          this.refreshProductos();
        });
      }
  }

  refreshProductos(){
    this.listarProductos().subscribe((productos:{[llave:string]:Producto}) => {
      this.setProductos(productos);
    });
  }

  setProductos(productos:{[llave:string]:Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos);
  }

    getProductoByLlave(llave: string): Producto | undefined {
      return this.productos[llave];
    }

  eliminarProducto(llave:string){
    this.datosService.eliminarProducto(llave).subscribe(() => {
      console.log(`Producto con llave ${llave} eliminado`);
      this.refreshProductos();
    });
  }
}
