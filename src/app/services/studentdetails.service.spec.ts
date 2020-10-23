import { TestBed } from '@angular/core/testing';

import { StudentdetailsService } from './studentdetails.service';

describe('StudentdetailsService', () => {
  let service: StudentdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
