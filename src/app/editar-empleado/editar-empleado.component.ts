import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../servicio/crud.service';
@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {
  elID: any;

  formularioDeClientes: FormGroup;
  constructor(
    public formulario: FormBuilder,
    private activeRoute: ActivatedRoute,
    private CrudService: CrudService,
    private ruteador: Router,
  ) {
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    this.CrudService.ObtenerCliente(this.elID).subscribe(respuesta => {
      this.formularioDeClientes.setValue({
        nombre: respuesta[0]['nombre'],
        direccion: respuesta[0]['direccion'],
        telefono: respuesta[0]['telefono'],
        fecha_nacimiento: respuesta[0]['fecha_nacimiento'],
      });
    });
    this.formularioDeClientes = this.formulario.group({
      nombre: [''],
      direccion: [''],
      telefono: [''],
      fecha_nacimiento: [''],
    });
  }

  ngOnInit(): void {
  }
  enviarDatos(): any {
    if (window.confirm("¿Desea editar el registro?")) {
      this.CrudService.EditarCliente(this.elID, this.formularioDeClientes.value).subscribe(() => {
        this.ruteador.navigateByUrl('2408/listar-cliente');
      });
    }
  }
}
