import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!:ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();


   agregarProducto(evento:Event) {
    evento.preventDefault();  //para evitar que se refresquen y no se guarden los datos

      // validar que sean valores correctos
      if(this.descripcionInput.nativeElement.value.trim() === '' || this.precioInput == null || this.precioInput.nativeElement.value == 0){
        console.log('Debe ingresar una descripcion y un precio validos');
        return;
      }

      const producto = new Producto(this.descripcionInput.nativeElement.value,this.precioInput.nativeElement.value);
      
      //Emitir el evento del nuevo producto
      this.nuevoProducto.emit(producto);

      //limpiar campos
      this.descripcionInput.nativeElement.value = '';
      this.precioInput.nativeElement.value = null;
    }
}
