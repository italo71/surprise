import { Injectable } from '@angular/core';
import { ComunicationService } from './comunication.service';
import { sessao } from '../model/sessao';

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

  gerarSessao(session: sessao) {
    sessionStorage.setItem('sessionCTO', JSON.stringify(session));
  }

  obterSessao(): sessao {
    let sessaoStorage: any = sessionStorage.getItem('sessionCTO');
    if (sessaoStorage == null) return new sessao();
    sessaoStorage = JSON.parse(sessaoStorage);
    let session: sessao = new sessao();
    session.map(sessaoStorage);
    return session;
  }

}
