import { Component, OnInit } from '@angular/core';
import { nivelAtual } from 'src/app/shared/model/nivel';
import { AlertService } from 'src/app/shared/service/alert.service';
import { CacheService } from 'src/app/shared/service/cache.service';
import { ComunicationService } from 'src/app/shared/service/comunication.service';

@Component({
  selector: 'app-e02',
  templateUrl: './e02.component.html',
  styleUrls: ['./e02.component.css']
})
export class E02Component implements OnInit {
  constructor(
    private comu: ComunicationService,
    private alert: AlertService,
    private cache: CacheService
  ) {
    this.comu.listen().subscribe((m: any) => {
      if (m == 'help-2') {
        $('.print').addClass('no-print');
        $('.print').removeClass('print');
        $('#d2').removeClass('no-print')
        $('#d2').addClass('print')
      }
    })
  }

  ngOnInit(): void {
    let n:nivelAtual = new nivelAtual();
    n.nivel_atual = 1;
    n.obs = null;
    this.cache.passarNivel(n);
  }
}
