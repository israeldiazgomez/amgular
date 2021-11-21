import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTipoProductoComponent } from './show-tipo-producto.component';

describe('ShowTipoProductoComponent', () => {
  let component: ShowTipoProductoComponent;
  let fixture: ComponentFixture<ShowTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTipoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
