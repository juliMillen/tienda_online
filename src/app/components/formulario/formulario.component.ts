import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit(){
    //verificar si debemos cargar un producto ya existente
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductoById(Number(id));
      if(producto){
        //cargar informacion si se encuentra un producto valido
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }


   guardarProducto(evento:Event) {
    evento.preventDefault();  //para evitar que se refresquen y no se guarden los datos

      // validar que sean valores correctos
      if(this.descripcionInput === '' || this.precioInput == null || this.precioInput == 0){
        console.log('Debe ingresar una descripcion y un precio validos');
        return;
      }

      const producto = new Producto(this.productoId,this.descripcionInput,this.precioInput);
      
      // agrego el nuevo producto usando el servicio
      this.productoService.guardarProducto(producto);

      //limpiar campos
      this.limpiarFormulario();

      //redirigir al inicio
      this.router.navigate(['/'])
    }


    cancelar(){
      //redirige hacia el inicio
      this.router.navigate(['/']);
    }


    eliminarProducto(){
      if(this.productoId !== null){
        this.productoService.eliminarProducto(this.productoId);
        this.limpiarFormulario();
        this.router.navigate(['/']);

      }
    }

    limpiarFormulario(){
      this.productoId = null;
      this.descripcionInput= '';
      this.precioInput= null;
    }
}
