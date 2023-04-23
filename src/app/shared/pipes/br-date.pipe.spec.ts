import { TestBed } from '@angular/core/testing';
import { BrDatePipe } from './br-date.pipe';

describe('BrDatePipe', () => {
  let pipe: BrDatePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [BrDatePipe],
    }).compileComponents();

    pipe = TestBed.inject(BrDatePipe);
  });

  it('deve transformar uma data ISO para o formato "DD/MM/AAAA"', () => {
    const isoDate = '2023-04-23T00:00:00.000Z';
    const expectedDate = '23/04/2023';
    const transformedDate = pipe.transform(isoDate);
    expect(transformedDate).toEqual(expectedDate);
  });

  it('deve retornar o valor original se não for uma data ISO válida', () => {
    const invalidDate = 'data-invalida';
    const transformedDate = pipe.transform(invalidDate);
    expect(transformedDate).toEqual(invalidDate);
  });

  it('deve retornar o valor original se não corresponder ao formato de data ISO', () => {
    const nonIsoDate = '23/04/2023';
    const transformedDate = pipe.transform(nonIsoDate);
    expect(transformedDate).toEqual(nonIsoDate);
  });
});
