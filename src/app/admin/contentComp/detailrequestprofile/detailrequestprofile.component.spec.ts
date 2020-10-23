import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrequestprofileComponent } from './detailrequestprofile.component';

describe('DetailrequestprofileComponent', () => {
  let component: DetailrequestprofileComponent;
  let fixture: ComponentFixture<DetailrequestprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailrequestprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailrequestprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
