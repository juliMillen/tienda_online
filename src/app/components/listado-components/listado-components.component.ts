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


  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit() {
    //Inicializar los productos
    this.listaProductos = this.productoService.productos;

  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }


}
