import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsubjectprofileComponent } from './detailsubjectprofile.component';

describe('DetailsubjectprofileComponent', () => {
  let component: DetailsubjectprofileComponent;
  let fixture: ComponentFixture<DetailsubjectprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsubjectprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsubjectprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
