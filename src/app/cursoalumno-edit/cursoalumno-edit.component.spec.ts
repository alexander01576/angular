import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoalumnoEditComponent } from './cursoalumno-edit.component';

describe('CursoalumnoEditComponent', () => {
  let component: CursoalumnoEditComponent;
  let fixture: ComponentFixture<CursoalumnoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoalumnoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoalumnoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
