import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ListarEmpleadoComponent } from './listar-empleado.component';

describe('ListarEmpleadoComponent', () => {
  let component: ListarEmpleadoComponent;
  let fixture: ComponentFixture<ListarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [HttpClientTestingModule], 
      declarations: [ ListarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
