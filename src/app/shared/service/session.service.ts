import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/assets/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  protected ws = enviroment.url;
  constructor(
    private http: HttpClient
  ) { }

  logar(login: string, senha: string) {
    let postData = {
      "login": login,
      "senha": senha
    }
    return this.http.post(this.ws + 'usuario/login', postData)
  }
}
