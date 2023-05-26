import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  regrasLidas() {
    let j:any = sessionStorage.getItem('readedRules');
    return JSON.parse(j);
  }

  lerRegras(v: any) {
    let postData = {
      "leitura":v
    }
    sessionStorage.setItem('readedRules', JSON.stringify(postData));
  }

}
