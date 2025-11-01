import { TestBed } from '@angular/core/testing';
import { VehiculosService } from './vehiculos';
import { provideHttpClient } from '@angular/common/http';

describe('VehiculosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculosService, provideHttpClient()],
    });
  });

  it('debería crearse', () => {
    const service = TestBed.inject(VehiculosService);
    expect(service).toBeTruthy();
  });
});
