import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  constructor() { }

  salvarNome(nome: any) {
    if (nome) {
      let json = {
        'nome': nome
      }
      sessionStorage.setItem('nome', JSON.stringify(json));
    }
  }

  obterNome() {
    let l: any = sessionStorage.getItem('nome');
    if (l) {
      return JSON.parse(l);
    }
    else return null;
  }
}
