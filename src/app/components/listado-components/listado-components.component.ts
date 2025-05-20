import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoComponent } from "../producto/producto.component";

@Component({
  selector: 'app-listado-components',
  imports: [FormsModule, FormularioComponent, ProductoComponent],
  templateUrl: './listado-components.component.html',
  styleUrl: './listado-components.component.css'
})


export class ListadoComponentsComponent {

  listaProductos: Producto[] = [
    new Producto('Chaqueta Cuero',200),
    new Producto('Camisa cuadros',80),
    new Producto('Remera S',60)
  ];

  agregarProducto(producto: Producto) {
    this.listaProductos.push(producto);
  }

}
