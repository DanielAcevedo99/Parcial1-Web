import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoCardComponent } from './vehiculo-card';
import { Vehiculo } from '../../../../core/models/vehiculo.model';

describe('VehiculoCardComponent', () => {
  let component: VehiculoCardComponent;
  let fixture: ComponentFixture<VehiculoCardComponent>;

  const mockVehiculo: Vehiculo = {
    id: 99,
    marca: 'TestMarca',
    linea: 'TestLinea',
    referencia: 'Ref',
    modelo: 2020,
    kilometraje: 12345,
    color: 'Azul',
    imagen: 'https://example.com/test.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoCardComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoCardComponent);
    component = fixture.componentInstance;

    component.vehiculo = mockVehiculo;

    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });
});
