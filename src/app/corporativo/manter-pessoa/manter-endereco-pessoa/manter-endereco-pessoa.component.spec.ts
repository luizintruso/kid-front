import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterEnderecoPessoaComponent } from './manter-endereco-pessoa.component';

describe('ManterEnderecoPessoaComponent', () => {
  let component: ManterEnderecoPessoaComponent;
  let fixture: ComponentFixture<ManterEnderecoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterEnderecoPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterEnderecoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
