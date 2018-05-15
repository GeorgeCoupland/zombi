import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SightingService {

  private API_URL = 'http://localhost:3000/sighting';

  constructor(private httpClient: HttpClient) { }

  createOne(sighting) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/`, sighting, options)
      .toPromise()
  }

}