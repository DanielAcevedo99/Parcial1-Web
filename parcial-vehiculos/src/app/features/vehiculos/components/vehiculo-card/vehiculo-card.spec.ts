import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoCardComponent } from './vehiculo-card';

describe('VehiculoCardComponent', () => {
  let component: VehiculoCardComponent;
  let fixture: ComponentFixture<VehiculoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoCardComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });
});
