import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';
import { RuletaComponent } from './ruleta/ruleta.component';
import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'agregar-cliente'},
  { path: 'agregar-cliente', component: AgregarEmpleadoComponent },
  
  { path: '2408/listar-cliente', component: ListarEmpleadoComponent },
  
  { path: 'editar-cliente/:id', component: EditarEmpleadoComponent },

  { path: 'agradecimiento', component: AgradecimientoComponent },

  { path: 'ruleta-premio', component: RuletaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
