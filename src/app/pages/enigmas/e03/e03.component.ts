import { Router } from '@angular/router';
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
  soundElement2: HTMLAudioElement;

  constructor(
    private comu: ComunicationService,
    private alert: AlertService,
    private cache: CacheService,
    private router:Router
  ) {
  }


  ngOnInit(): void {
    this.cache.passarNivel(2, null);
    this.soundElement = document.getElementById('sound') as HTMLAudioElement;
    this.soundElement2 = document.getElementById('sound2') as HTMLAudioElement;
    this.soundElement.play();
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
      this.soundElement.volume = ((volume / 100) > 1 ? 1 : volume / 100);
    });
  }

  cliqueMusica1() {
    this.alert.custon({
      text: 'Muito bem, agora prepare seus ouvidos e encontre ela novamente',
      imageUrl: 'https://i1.sndcdn.com/artworks-000234108427-4im3t1-t500x500.jpg'
    });
    $('#caixa').removeClass('click');
    $('#caixa2').addClass('click');
    $('#intrucao1').css('display', 'none');
    this.soundElement2.play();
    this.soundElement2.volume = 0.05;
    $('#tela').off();
    $('#tela').on('mousemove', (event: any) => {
      let mousex = event.originalEvent.clientX;
      let mousey = event.originalEvent.clientY;
      let caixax = Number(($('#caixa2').offset()?.left)?.toFixed(0));
      let caixay = Number(($('#caixa2').offset()?.top)?.toFixed(0));
      let disx = Math.abs(mousex - caixax);
      let disy = Math.abs(mousey - caixay);
      let dis = (disy + disx);
      let volume = Number((10000 / dis).toFixed(0));
      this.soundElement.volume = ((volume / 100) > 1 ? 1 : volume / 100);
      /*  */
      let mousex2 = event.originalEvent.clientX;
      let mousey2 = event.originalEvent.clientY;
      let caixax2 = Number(($('#caixa').offset()?.left)?.toFixed(0));
      let caixay2 = Number(($('#caixa').offset()?.top)?.toFixed(0));
      let disx2 = Math.abs(mousex2 - caixax2);
      let disy2 = Math.abs(mousey2 - caixay2);
      let dis2 = (disy2 + disx2);
      let volume2 = Number((10000 / dis2).toFixed(0));
      this.soundElement2.volume = ((volume2 / 100) > 1 ? 1 : volume2 / 100);
    });
  }

  cliqueMusica2() {
    this.alert.custon({
      title: 'Parabens',
      text: 'Você realmente tem bons ouvidos'
    })
    $('#tela').off();
    this.soundElement2.volume = 0;
    this.router.navigate(['/receptor']);
  }

}
