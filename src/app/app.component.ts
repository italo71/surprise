import { Component, OnInit } from '@angular/core';
import { ComunicationService } from './shared/service/comunication.service';
import { CacheService } from './shared/service/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'surprise';

  bug: boolean = false;

  constructor(
    private comu: ComunicationService,
    private cache: CacheService
  ) {
    this.comu.listen().subscribe(m => {
      console.log(m);
      let auxLeitura = m.split(' ');
      console.log(auxLeitura);
      if (auxLeitura[0] == 'leitura') {
        if (parseInt(auxLeitura[1]) > 0) {
          return;
        }
        else if(auxLeitura[1] == 0){
          
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.cache.regrasLidas() == null) {
      this.cache.lerRegras(false);
    }
    else {
      let j = this.cache.regrasLidas();
      console.log(j.leitura);
      if (j.leitura == false) {
        this.bug = false
      }
      else{
        this.bug = true;
      }
    }
  }

}
