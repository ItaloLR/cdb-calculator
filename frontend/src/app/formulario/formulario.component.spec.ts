import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CdbService } from '../services/cdb.service';
import { HttpClientModule } from '@angular/common/http';

import { lastValueFrom, timeout } from 'rxjs';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let service: CdbService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [FormularioComponent],
    })
  );

  beforeEach(() => {
    service = TestBed.inject(CdbService);

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Solicitar Calculo de Cdb Com valor Positivo', async () => {
    component.model.prazo = 2;
    component.model.valorAplicado = 1;
    component.valorMonetario = 'R$ 1';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );

    expect(result.bruto > 0).toBe(true);
  });

  it('Solicitar Calculo de Cdb Com valor Negativo', async () => {
    component.model.prazo = 6;
    component.model.valorAplicado = -1;
    component.valorMonetario = 'R$ -1';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model)
    ).catch((error) => {
      let objError = error.error;
      expect(objError.liquido).toBe(0);
    });
  });

  it('Solicitar Calculo de Cdb Com Mes igual á 1', async () => {
    component.model.prazo = 1;
    component.model.valorAplicado = 1;
    component.valorMonetario = 'R$ 1';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model)
    ).catch((error) => {
      let objError = error.error;
      expect(objError.liquido).toBe(0);
    });
  });

  it('Testar Cálculo, resultado Bruto 6 meses', async () => {
    component.model.prazo = 6;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.bruto).toBe(1059.76);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Bruto 7 meses', async () => {
    component.model.prazo = 7;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.bruto).toBe(1070.06);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Bruto 8 meses', async () => {
    component.model.prazo = 8;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );

    expect(result.bruto).toBe(1080.46);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Bruto 9 meses', async () => {
    component.model.prazo = 9;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.bruto).toBe(1090.96);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Bruto 10 meses', async () => {
    component.model.prazo = 10;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.bruto).toBe(1101.56);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Bruto 11 meses', async () => {
    component.model.prazo = 11;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.bruto).toBe(1112.27);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Bruto 12 meses', async () => {
    component.model.prazo = 12;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.bruto).toBe(1123.08);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 6 meses', async () => {
    component.model.prazo = 6;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.liquido).toBe(1046.31);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 7 meses', async () => {
    component.model.prazo = 7;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.liquido).toBe(1056.05);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 8 meses', async () => {
    component.model.prazo = 8;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );

    expect(result.liquido).toBe(1064.37);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 9 meses', async () => {
    component.model.prazo = 9;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.liquido).toBe(1072.77);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 10 meses', async () => {
    component.model.prazo = 10;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.liquido).toBe(1081.25);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 11 meses', async () => {
    component.model.prazo = 11;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.liquido).toBe(1089.82);
    expect(result.success).toEqual(true);
  });

  it('Testar Cálculo, resultado Liquido 12 meses', async () => {
    component.model.prazo = 12;
    component.model.valorAplicado = 1000;
    component.valorMonetario = 'R$ 1.000,00';

    component.calcular();
    const result = await lastValueFrom(
      service.calcularCDB(component.model).pipe(timeout(10000))
    );
    expect(result.liquido).toBe(1098.47);
    expect(result.success).toEqual(true);
  });
});
