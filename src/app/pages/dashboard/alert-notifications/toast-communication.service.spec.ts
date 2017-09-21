import { TestBed, inject } from '@angular/core/testing';

import { ToastCommunicationService } from './toast-communication.service';

describe('ToastCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastCommunicationService]
    });
  });

  it('should ...', inject([ToastCommunicationService], (service: ToastCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
