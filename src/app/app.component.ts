import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponentsComponent } from "./components/listado-components/listado-components.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-online';
}
