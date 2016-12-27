import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProxyService } from './proxy.service';

describe('ProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProxyService],
      imports: [HttpModule]
    });
  });

  it('should get users', async(inject([ProxyService], (service: ProxyService) => {
    expect(service).toBeTruthy();
    service.getUsers().subscribe(
      response => {
        expect(response.json()).toBeDefined();
      }
    );
  })));
});
