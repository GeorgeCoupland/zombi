import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  private API_URL = 'http://localhost:3000/profile';

  constructor(private httpClient: HttpClient) { }

  getOne(userId: string) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${userId}`, options)
      .toPromise()
  }
}
