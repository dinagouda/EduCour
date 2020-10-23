import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstudenteprofileComponent } from './detailstudenteprofile.component';

describe('DetailstudenteprofileComponent', () => {
  let component: DetailstudenteprofileComponent;
  let fixture: ComponentFixture<DetailstudenteprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstudenteprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstudenteprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
