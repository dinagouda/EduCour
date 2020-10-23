import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailteachereprofileComponent } from './detailteachereprofile.component';

describe('DetailteachereprofileComponent', () => {
  let component: DetailteachereprofileComponent;
  let fixture: ComponentFixture<DetailteachereprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailteachereprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailteachereprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
