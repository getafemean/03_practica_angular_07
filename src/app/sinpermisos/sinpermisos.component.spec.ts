import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinpermisosComponent } from './sinpermisos.component';

describe('SinpermisosComponent', () => {
  let component: SinpermisosComponent;
  let fixture: ComponentFixture<SinpermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinpermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinpermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
