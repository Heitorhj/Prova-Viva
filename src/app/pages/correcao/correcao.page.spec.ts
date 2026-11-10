import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrecaoPage } from './correcao.page';

describe('CorrecaoPage', () => {
  let component: CorrecaoPage;
  let fixture: ComponentFixture<CorrecaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
