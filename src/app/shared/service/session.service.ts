import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/assets/enviroment/enviroment';
import { sessao } from '../model/sessao';
import { CacheService } from './cache.service';
import { nivelAtual } from '../model/nivel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  protected ws = enviroment.url;
  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) { }

  logar(login: string, senha: string) {
    let postData = {
      "login": login,
      "senha": senha
    }
    return this.http.post(this.ws + 'usuario/login', postData)
  }

  buscarUltimoNivelBack() {
    let postData = {
      "id_usuario": this.obterIdUsuario()
    }
    return this.http.post(this.ws + 'nivel/obter', postData);;
  }

  iniciarSessao(sessao: sessao) {
    this.cache.gerarSessao(sessao);
  }

  obterSessao(): sessao {
    let s = this.cache.obterSessao();
    if (s == null) return new sessao();
    let sess = new sessao();
    sess.map(s);
    return sess;
  }

  salvarNivelAtual(nivel_atual: nivelAtual) {
    this.cache.passarNivel(nivel_atual);
  }

  obterNivelAtual(): nivelAtual {
    let n = this.cache.obterNivel();
    if (n == null) return new nivelAtual();
    let nivel_atual: nivelAtual = new nivelAtual();
    nivel_atual.map(n);
    return nivel_atual;
  }

  obterIdUsuario(): number {
    let session: sessao = this.obterSessao();
    return session.id;
  }
}
