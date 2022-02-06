import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'agregar-empleado'},
  { path: 'agregar-empleado', component: AgregarEmpleadoComponent },
  
  { path: 'listar-empleado', component: ListarEmpleadoComponent },
  
  { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
