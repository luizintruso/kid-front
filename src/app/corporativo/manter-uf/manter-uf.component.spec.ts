import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterUFComponent } from './manter-uf.component';

describe('ManterUFComponent', () => {
  let component: ManterUFComponent;
  let fixture: ComponentFixture<ManterUFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterUFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterUFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
