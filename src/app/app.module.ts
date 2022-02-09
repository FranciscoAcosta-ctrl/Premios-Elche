import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { CrudComponent } from './crud/crud.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RuletaComponent } from './ruleta/ruleta.component';
import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    ResgisterComponent,
    CrudComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent,
    RuletaComponent,
    AgradecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
