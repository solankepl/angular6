import { TestBed } from '@angular/core/testing';

import { YoutubeapiService } from './youtubeapi.service';

describe('YoutubeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeapiService = TestBed.get(YoutubeapiService);
    expect(service).toBeTruthy();
  });
});
