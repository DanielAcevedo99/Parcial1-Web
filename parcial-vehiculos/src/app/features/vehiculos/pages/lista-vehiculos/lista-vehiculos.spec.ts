import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaVehiculosComponent } from './lista-vehiculos';
import { Vehiculo } from '../../../../core/models/vehiculo.model';
import { of } from 'rxjs';
import { VehiculosService } from '../../../../core/services/vehiculos';
import { By } from '@angular/platform-browser';

describe('ListaVehiculosComponent', () => {
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;
  let mockVehiculosService: jasmine.SpyObj<VehiculosService>;

  const mockVehiculos: Vehiculo[] = [
    {
      id: 1, marca: 'Renault', linea: 'Kangoo', referencia: 'VU Express',
      modelo: 2017, kilometraje: 93272, color: 'Blanco',
      imagen: 'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
    },
    {
      id: 2, marca: 'Chevrolet', linea: 'Spark', referencia: 'Life',
      modelo: 2018, kilometraje: 55926, color: 'Plata',
      imagen: 'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg'
    },
    {
      id: 3, marca: 'Nissan', linea: 'March', referencia: 'Active Plus',
      modelo: 2019, kilometraje: 31298, color: 'Gris',
      imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2020/08/20200821-NISSAN-MARCH-ACTIVE-REDUCCION-DE-PRECIO-EN-COLOMBIA-01.jpg'
    }
  ];

  beforeEach(async () => {
    mockVehiculosService = jasmine.createSpyObj('VehiculosService', ['getVehiculos']);
    mockVehiculosService.getVehiculos.and.returnValue(of(mockVehiculos));

    await TestBed.configureTestingModule({
      imports: [ListaVehiculosComponent], 
      providers: [
        { provide: VehiculosService, useValue: mockVehiculosService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar una tabla con encabezado y tres filas de vehículos', () => {
    fixture.detectChanges();

    const filas = fixture.debugElement.queryAll(By.css('tbody tr'));
    const encabezados = fixture.debugElement.queryAll(By.css('thead th'));

    expect(encabezados.length).toBeGreaterThan(0);
    expect(filas.length).toBe(3);

    const primeraFilaTexto = filas[0].nativeElement.textContent;
    expect(primeraFilaTexto).toContain('Renault');
  });
});
