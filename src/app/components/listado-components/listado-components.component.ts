import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-components',
  imports: [FormsModule],
  templateUrl: './listado-components.component.html',
  styleUrl: './listado-components.component.css'
})


export class ListadoComponentsComponent {
  listaProductos: Producto[] = [
    new Producto('Chaqueta Cuero',200),
    new Producto('Camisa cuadros',80),
    new Producto('Remera S',60)
  ];


  descripcionInput: string = '';
  precioInput: number | null =null;

  agregarProducto() {
      // validar que sean valores correctos
      if(this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput == 0){
        console.log('Debe ingresar una descripcion y un precio validos');
        return;
      }

      const producto = new Producto(this.descripcionInput,this.precioInput);
      this.listaProductos.push(producto);

      //limpiar campos
      this.descripcionInput = '';
      this.precioInput = null;
    }
}
