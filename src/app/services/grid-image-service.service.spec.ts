import { TestBed, inject } from '@angular/core/testing';

import { GridImageServiceService } from './grid-image-service.service';

describe('GridImageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridImageServiceService]
    });
  });

  it('should be created', inject([GridImageServiceService], (service: GridImageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
