import { Injectable } from '@angular/core';
import { ComunicationService } from './comunication.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(
    private comu: ComunicationService
  ) { }

  regrasLidas() {
    let j: any = sessionStorage.getItem('readedRules');
    return JSON.parse(j);
  }

  lerRegras(v: any) {
    let postData = {
      "leitura": v
    }
    this.comu.filter('leitura ' + v);
    sessionStorage.setItem('readedRules', JSON.stringify(postData));
  }

  passarNivel(nivelAnterior: any, obs: any = null) {
    let json = {
      "ultimoNivel": nivelAnterior,
      "obs": obs
    }
    sessionStorage.setItem('niveis', JSON.stringify(json));
  }

  obterNivel() {
    let v: any = sessionStorage.getItem('niveis');
    return JSON.parse(v);
  }

}
