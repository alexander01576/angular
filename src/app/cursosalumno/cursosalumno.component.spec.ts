import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosalumnoComponent } from './cursosalumno.component';

describe('CursosalumnoComponent', () => {
  let component: CursosalumnoComponent;
  let fixture: ComponentFixture<CursosalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
