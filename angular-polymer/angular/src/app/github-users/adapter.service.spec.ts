import { ProxyService } from './proxy.service';
import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdapterService } from './adapter.service';

describe('AdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdapterService, ProxyService],
      imports: [HttpModule]
    });
  });

  it('should get users', inject([AdapterService], (service: AdapterService) => {
    expect(service).toBeTruthy();
    service.getUsers().subscribe(
      users => {
        expect(users).toBeDefined();
      }
    );
  }));
});
