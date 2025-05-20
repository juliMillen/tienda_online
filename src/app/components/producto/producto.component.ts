import { Component, Input } from '@angular/core';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto!: Producto;
}
