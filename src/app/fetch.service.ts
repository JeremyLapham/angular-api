import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('https://random.dog/woof.json')
  }
}
