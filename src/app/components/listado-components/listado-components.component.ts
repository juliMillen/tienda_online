import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-components',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-components.component.html',
  styleUrl: './listado-components.component.css'
})


export class ListadoComponentsComponent {


  productos: {[llave:string]:Producto} = {};

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit() {
    this.cargarProductos();

  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]:Producto})=>{
      this.productos = productos;
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


}
