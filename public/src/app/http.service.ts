import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCake(cake_id: any) {
    return this._http.get('/cakes/' + cake_id);
  }
  getCakes() {
    return this._http.get('/cakes');
  }
  createCake(newCake: object) {
    return this._http.post('/cakes', newCake);
  }
  addPost(cake_id: any, newPost: object) {
    return this._http.put('/posts/' + cake_id, newPost);
  }
}
