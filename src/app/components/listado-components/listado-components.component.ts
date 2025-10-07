import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoComponent } from "../producto/producto.component";
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-components',
  imports: [FormsModule, FormularioComponent, ProductoComponent],
  templateUrl: './listado-components.component.html',
  styleUrl: './listado-components.component.css'
})


export class ListadoComponentsComponent {


  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit() {
    //Inicializar los productos
    this.listaProductos = this.productoService.listaProductos;

    this.productoService.detalleProductoEmitter.subscribe(
      (producto: Producto) => alert(`Producto: ${producto.descripcion},$${producto.precio}`)
    );
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }


}
