import { Component, Input } from '@angular/core';
import { Producto } from '../../model/Producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input() producto!: Producto;

  constructor(private router:Router){ }

  editarProducto(id:number){
    //pasamos el ID en la URL
    this.router.navigate(['/editar',id])
  }



}
