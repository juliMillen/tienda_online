import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService, private router:Router) {

  }


   guardarProducto(evento:Event) {
    evento.preventDefault();  //para evitar que se refresquen y no se guarden los datos

      // validar que sean valores correctos
      if(this.descripcionInput === '' || this.precioInput == null || this.precioInput == 0){
        console.log('Debe ingresar una descripcion y un precio validos');
        return;
      }

      const producto = new Producto(this.descripcionInput,this.precioInput);
      
      // agrego el nuevo producto usando el servicio
      this.productoService.agregarProducto(producto);

      //limpiar campos
      this.descripcionInput = '';
      this.precioInput= null;

      //redirigir al inicio
      this.router.navigate(['/'])
    }


    cancelar(){
      //redirige hacia el inicio
      this.router.navigate(['/']);
    }
}
