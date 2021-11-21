import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoProductoComponent } from './create-tipo-producto.component';

describe('CreateTipoProductoComponent', () => {
  let component: CreateTipoProductoComponent;
  let fixture: ComponentFixture<CreateTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
