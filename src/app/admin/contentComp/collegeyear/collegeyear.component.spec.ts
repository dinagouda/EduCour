import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeyearComponent } from './collegeyear.component';

describe('CollegeyearComponent', () => {
  let component: CollegeyearComponent;
  let fixture: ComponentFixture<CollegeyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
