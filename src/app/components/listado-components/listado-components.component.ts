import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-components',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-components.component.html',
  styleUrl: './listado-components.component.css'
})


export class ListadoComponentsComponent {


  productos: {[llave:string]:Producto} = {};

  productosSubs: Subscription | null = null;

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit() {
    this.cargarProductos();

    //escuchar cambios en la lista de productos

    this.productosSubs = this.productoService.productosActualizados.subscribe((productos) => {
      this.productos = productos;
    });

  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]:Producto})=>{
      this.productos = productos;
      this.productoService.setProductos(productos);
    });
  }

  obtenerLlaves():string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if(this.productosSubs != null){
      this.productosSubs.unsubscribe();
    }
  }


}
