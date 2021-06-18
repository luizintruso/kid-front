import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterPessoaFisicaComponent } from './manter-pessoa-fisica.component';

describe('ManterPessoaFisicaComponent', () => {
  let component: ManterPessoaFisicaComponent;
  let fixture: ComponentFixture<ManterPessoaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterPessoaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
