import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/service/alert.service';
import { CacheService } from 'src/app/shared/service/cache.service';
import { ComunicationService } from 'src/app/shared/service/comunication.service';
import { InfosService } from 'src/app/shared/service/infos.service';

@Component({
  selector: 'app-h01',
  templateUrl: './h01.component.html',
  styleUrls: ['./h01.component.css']
})
export class H01Component implements OnInit {

  constructor(
    private comu: ComunicationService,
    private alert: AlertService,
    private info: InfosService,
    private cache: CacheService
  ) { }

  ngOnInit(): void {
    document.getElementById('max')?.requestFullscreen();
    this.comu.filter('nav-off');
    this.comu.filter('bug-off');
    let i = 1;

    let j = setInterval(() => {
      $(`.parte-${i}`).removeClass('none');
      i++;
      if (i >= 17) clearInterval(i);
    }, 3000);
  }
}
