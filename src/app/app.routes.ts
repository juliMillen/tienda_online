import { Routes } from '@angular/router';
import { ListadoComponentsComponent } from './components/listado-components/listado-components.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:'', component: ListadoComponentsComponent},
    {path: 'listado', component: ListadoComponentsComponent},
    {path: 'agregar', component: FormularioComponent},
    {path: 'editar/:llave', component: FormularioComponent},
    {path: '**', component: ErrorComponent}
];
