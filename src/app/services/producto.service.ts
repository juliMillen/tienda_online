import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProductos: Producto[] = [
      new Producto('Chaqueta Cuero',200),
      new Producto('Camisa cuadros',80),
      new Producto('Remera S',60)
    ];

    detalleProductoEmitter = new EventEmitter<Producto>();

    agregarProducto(producto: Producto) {
    this.listaProductos.push(producto);
  }
}
