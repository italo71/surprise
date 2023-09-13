import { Injectable } from '@angular/core';
import { ComunicationService } from './comunication.service';
import { sessao } from '../model/sessao';
import { nivelAtual } from '../model/nivel';

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

  passarNivel(nivelInfo: nivelAtual) {
    let json = {
      "nivel_atual": nivelInfo.nivel_atual,
      "obs": nivelInfo.obs
    }
    sessionStorage.setItem('niveis', JSON.stringify(json));
  }

  obterNivel(): nivelAtual {
    let v: any = sessionStorage.getItem('niveis');
    if (v == null) return new nivelAtual();
    let nivel: nivelAtual = new nivelAtual();
    nivel.map(JSON.parse(v));
    return nivel;
  }

  gerarSessao(session: sessao) {
    sessionStorage.setItem('sessionCTO', JSON.stringify(session));
  }

  obterSessao(): sessao {
    let sessaoStorage: any = sessionStorage.getItem('sessionCTO');
    if (sessaoStorage == null) return new sessao();
    sessaoStorage = JSON.parse(sessaoStorage);
    let session: sessao = new sessao();
    session.map(JSON.parse(sessaoStorage));
    return session;
  }

}
