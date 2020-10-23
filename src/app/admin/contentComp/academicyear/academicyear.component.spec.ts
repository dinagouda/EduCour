import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicyearComponent } from './academicyear.component';

describe('AcademicyearComponent', () => {
  let component: AcademicyearComponent;
  let fixture: ComponentFixture<AcademicyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
