import { Component, OnInit } from '@angular/core';
import { ComunicationService } from './shared/service/comunication.service';
import { CacheService } from './shared/service/cache.service';
import { AlertService } from './shared/service/alert.service';
import { RestService } from './shared/service/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'surprise';
  navBar: boolean = true;
  bug: boolean = false;
  helpList: Array<any> = [];

  constructor(
    private comu: ComunicationService,
    private cache: CacheService,
    private alert: AlertService,
    private rest: RestService
  ) {
    this.comu.listen().subscribe(m => {
      //console.log(m);
      let auxLeitura = m.split(' ');
      if (auxLeitura[0] == 'leitura') {
        if (parseInt(auxLeitura[1]) > 0) {
          return;
        }
        else if (auxLeitura[1] == 0) {

        }
      }
      if (m == 'nav-on') {
        this.navBar = true;
      }
      else if (m == 'nav-off') {
        this.navBar = false;
      }
      else if (m == 'bug-off') {
        this.bug = false;
      }
      else if (m == 'bug-on') {
        this.bug = true;
      }
    });
  }

  ngOnInit(): void {
    if (this.cache.regrasLidas() == null) {
      this.cache.lerRegras(false);
    }
    else {
      let j = this.cache.regrasLidas();
      if (j.leitura == false) {
        this.bug = false
      }
      else {
        this.bug = true;
      }
    }
  }


  bug_press() {
    let jsonNivel = this.cache.obterNivel();
    console.log(jsonNivel);
    if (jsonNivel) {
      let nivel = jsonNivel.nivel_atual;
      if (nivel == 0 && this.helpList[0] == null) {
        this.alert.custon({
          background: 'black',
          text: 'ferramenta de comunicação que representa letras, números e sinais de pontuação por meio de uma sequência de pontos e traços, ela pode ser usada para navegar por ai'
        });
      }
      else if (nivel == 0 && this.helpList[0]) {
        this.alert.custon({
          background: 'black',
          text: 'A url pode te levar a qualquer lugar'
        });
      }
      else if (nivel == 1 && this.helpList[1] == null) {
        this.alert.custon({
          background: 'black',
          text: 'Precione CTRL + P para ativar a impressão'
        });
      }
      else if (nivel == 1 && this.helpList[1]) {
        this.comu.filter('help-2');
      }
      else if (nivel == 2) {
        this.alert.custon({
          background: 'black',
          text: 'Mova o mouse até conseguir clicar em algo'
        });
      }
      let nNivel = Number(nivel);
      if (typeof (nNivel) == 'number')
        this.helpList[Number(nivel)] = true;
    }
  }
}
