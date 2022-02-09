import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {

  formDeClientes:FormGroup;

  constructor(
      public formulario:FormBuilder,
      private CrudService:CrudService,
      private ruteador:Router,
    ) { 
    this.formDeClientes = this.formulario.group({
      nombre:[''],
      direccion:[''],
      telefono:[''],
      fecha_nacimiento:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("Hola");
    console.log(this.formDeClientes.value);
    
    this.CrudService.AgregarCliente(this.formDeClientes.value).subscribe();
    this.ruteador.navigateByUrl('/agradecimiento');
  }


}
