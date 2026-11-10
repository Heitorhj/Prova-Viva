import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoDetalhePage } from './resultado-detalhe.page';

describe('ResultadoDetalhePage', () => {
  let component: ResultadoDetalhePage;
  let fixture: ComponentFixture<ResultadoDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
