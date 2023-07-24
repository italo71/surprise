import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/service/alert.service';
import { CacheService } from 'src/app/shared/service/cache.service';
import { ComunicationService } from 'src/app/shared/service/comunication.service';
import { InfosService } from 'src/app/shared/service/infos.service';

@Component({
  selector: 'app-e01',
  templateUrl: './e01.component.html',
  styleUrls: ['./e01.component.css']
})
export class E01Component implements OnInit {
  nome: any = null;
  interval: any = null


  constructor(
    private comu: ComunicationService,
    private alert: AlertService,
    private info: InfosService,
    private cache: CacheService
  ) { }

  ngOnInit(): void {
    this.comu.filter('nav-off');
    this.comu.filter('bug-off');
    let i = setInterval(() => {
      $('#o').removeClass('none');
      clearInterval(i);
    }, 3100);

    this.interval = setInterval(() => {
      if ($('#o').hasClass('pisca')) {
        $('#o').removeClass('pisca');
      }
      else {
        $('#o').addClass('pisca');
      }
    }, 500);
  }

  format(v: string) {
    let r: string = '';
    for (let i = 0; i < v.length; i++) {
      if (i == 0) {
        r = v[0].toUpperCase();
      }
      else r = r + v[i];
    }
    return r;
  }

  salvarNome() {
    let lista: Array<any> = this.nome.split(' ');
    console.log(lista);
    let n;
    if (lista.length > 1) {
      this.alert.custon({
        background: 'black',
        text: `Irei te chamar apenas de ${this.format(lista[0])}`,
        color: 'rgb(0, 203, 0)',
        confirmButtonColor: 'rgb(0, 203, 0)',
        position: 'top-left',
      });
    }
    n = this.format(lista[0]);
    $('#o').addClass('none');
    $('.btn-green').addClass('none');
    $('.ocultar').addClass('none');
    this.nome = n;
    this.info.salvarNome(String(n));

    let i = 1;

    let j = setInterval(() => {
      $(`.parte-${i}`).removeClass('none');
      i++;
      if (i == 7) {
        clearInterval(j);
        this.download('teste-ingresso-' + this.nome, `-.-. --- -. --. .-. .- - ..- .-.. .- - .. --- -. ...`);
      }
    }, 2000);
  }

  testeIngrecao() {
    let i = setInterval(() => {
      this.comu.filter('bug-on');
    }, 2000);

    this.cache.passarNivel(0, 'teste-ingresso');
  }

  download(filename: any = 'teste', text: any = 'oi') {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}
