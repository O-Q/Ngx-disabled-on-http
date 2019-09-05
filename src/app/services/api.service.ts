import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export const BASE_URL = 'https://cat-fact.herokuapp.com';

const headers = new HttpHeaders({
  'Content-Type': 'application/json;charset=UTF-8'
});
@Injectable({ providedIn: 'root' })
export class ApiService {
  factCatsUrl = `${BASE_URL}/facts`;
  constructor(private readonly http: HttpClient) {}
  testGetSome() {
    return this.http.get(this.factCatsUrl, { headers });
  }
}
