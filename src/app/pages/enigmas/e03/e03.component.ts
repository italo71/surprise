import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/service/alert.service';
import { CacheService } from 'src/app/shared/service/cache.service';
import { ComunicationService } from 'src/app/shared/service/comunication.service';

@Component({
  selector: 'app-e03',
  templateUrl: './e03.component.html',
  styleUrls: ['./e03.component.css']
})
export class E03Component implements OnInit {
  soundElement: HTMLAudioElement;

  constructor(
    private comu: ComunicationService,
    private alert: AlertService,
    private cache: CacheService
  ) {
  }


  ngOnInit(): void {
    this.cache.passarNivel(2, null);
    this.comu.filter('nav-off');
    this.soundElement = document.getElementById('sound') as HTMLAudioElement;
    //this.soundElement.play();
    this.soundElement.volume = (0.05);
    $('#tela').on('mousemove', (event: any) => {
      let mousex = event.originalEvent.clientX;
      let mousey = event.originalEvent.clientY;
      let caixax = Number(($('#caixa').offset()?.left)?.toFixed(0));
      let caixay = Number(($('#caixa').offset()?.top)?.toFixed(0));
      let disx = Math.abs(mousex - caixax);
      let disy = Math.abs(mousey - caixay);
      let dis = (disy + disx);
      let volume = Number((10000 / dis).toFixed(0));
      this.soundElement.volume = (volume / 100);
    })
    //console.log(this.soundElement)
  }

}
