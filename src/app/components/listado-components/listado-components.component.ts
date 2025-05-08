import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-listado-components',
  imports: [],
  templateUrl: './listado-components.component.html',
  styleUrl: './listado-components.component.css'
})


export class ListadoComponentsComponent {
  listaProductos: Producto[] = [
    new Producto('Chaqueta Cuero',200),
    new Producto('Camisa cuadros',80),
    new Producto('Remera S',60)
  ];

  agregarProducto(descProd:string, precioProd:number) {
      var productoNuevo = new Producto(descProd,precioProd);
      this.listaProductos.push(productoNuevo);
    }
}
