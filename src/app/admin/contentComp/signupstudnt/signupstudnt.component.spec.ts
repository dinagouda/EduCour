import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupstudntComponent } from './signupstudnt.component';

describe('SignupstudntComponent', () => {
  let component: SignupstudntComponent;
  let fixture: ComponentFixture<SignupstudntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupstudntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupstudntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
