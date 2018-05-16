import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class SightingService {

  private API_URL = environment.API_URL + '/sighting';

  constructor(private httpClient: HttpClient) { }

  createOne(sighting) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/`, sighting, options)
      .toPromise()
  }

  allSightings(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/all`, options)
      .toPromise()
  }



}
// new method for getting all the sightings
