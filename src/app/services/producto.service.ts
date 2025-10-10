import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  detalleProductoEmitter = new EventEmitter<Producto>();

  private idSiguiente = 1;

  productos: Producto[] = [];

  constructor(){
    //inicializamos los productos
    this.inicializarProductos();
  }

  private inicializarProductos(){
    const producto1 = new Producto(this.idSiguiente++,'Chaqueta Cuero', 200);
    const producto2 = new Producto(this.idSiguiente++,'Camisa Cuadros',80);
    const producto3 = new Producto(this.idSiguiente++,'Remera S',60);

    //Agregamos al arreglo de productos

    this.productos.push(producto1,producto2,producto3);
  }

  //Usado para agregar o modificar un producto existente
    guardarProducto(producto: Producto) {
      if(producto.id === null){
        //caso de agregacion

        producto.id = this.idSiguiente++;
        this.productos.push(producto);
      }else{
        //caso de modificacion

        const indice = this.productos.findIndex(p => p.id === producto.id);

        if(indice !== -1){
          this.productos[indice] = producto;
        }
      }
  }

    getProductoById(id: number): Producto | undefined {
      return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto(id:number){
    const indice = this.productos.findIndex(producto => producto.id === id);
    if(indice !== -1){
      this.productos.splice(indice,1);
    }
  }
}
