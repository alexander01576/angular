import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosEditComponent } from './alumnos-edit.component';

describe('AlumnosEditComponent', () => {
  let component: AlumnosEditComponent;
  let fixture: ComponentFixture<AlumnosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
