import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecolleageComponent } from './profilecolleage.component';

describe('ProfilecolleageComponent', () => {
  let component: ProfilecolleageComponent;
  let fixture: ComponentFixture<ProfilecolleageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecolleageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecolleageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
