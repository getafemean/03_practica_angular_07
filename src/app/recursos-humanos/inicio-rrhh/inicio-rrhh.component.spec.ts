import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRRHHComponent } from './inicio-rrhh.component';

describe('InicioRRHHComponent', () => {
  let component: InicioRRHHComponent;
  let fixture: ComponentFixture<InicioRRHHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioRRHHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRRHHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
