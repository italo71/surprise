import { Injectable } from '@angular/core';
import { enviroment } from 'src/assets/enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  protected env = enviroment;
  private ws: string = this.env.url;

  constructor(
    private http: HttpClient
  ) { }

  getFilmes() {
    return this.http.get(this.ws + 'filme');
  }
}
