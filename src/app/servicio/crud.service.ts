import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string = 'http://localhost:9090/clientes/'; 

  /**El error que marca en el editor no es un error de programacion solo es sintaxis */
  constructor(private clienteHttp:HttpClient) {}

  AgregarCliente(datosCliente:Cliente):Observable<any>{
     return this.clienteHttp.post(this.API+"?insertar=1",datosCliente);
  }

  ObtenerClientes(){
    return this.clienteHttp.get(this.API);
  }

  BorrarCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
 }

 
  ObtenerCliente(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+id);
}

  EditarCliente(id:any, datosCliente:Cliente):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosCliente);
 }
}
