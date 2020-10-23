import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantrequestsComponent } from './assistantrequests.component';

describe('AssistantrequestsComponent', () => {
  let component: AssistantrequestsComponent;
  let fixture: ComponentFixture<AssistantrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
