import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  private API_URL = environment.API_URL + '/profile';

  constructor(private httpClient: HttpClient) { }

  getOne(userId: string) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${userId}`, options)
      .toPromise()
  }
}
