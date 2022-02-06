import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.scss']
})
export class ListarEmpleadoComponent implements OnInit {

  Clientes:any;

  constructor(
    private CrudService:CrudService,
    ) { }

  ngOnInit(): void {
    this.CrudService.ObtenerClientes().subscribe(respuesta =>{
   
      this.Clientes= respuesta;
    })
  }
  
  borrarRegistro(id:any,iControl:any){
  
    if(window.confirm("¿Desea borrar el registro?")){  
    this.CrudService.BorrarCliente(id).subscribe((respuesta)=>{
        this.Clientes.splice(iControl,1);
    });
  }
 } 
}
