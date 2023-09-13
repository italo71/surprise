import { AlertService } from './../../shared/service/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/shared/service/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private cache: CacheService,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    return;
  }

  comecar() {
    let leitura = this.cache.regrasLidas();
    let nivel = this.cache.obterNivel();
    if (!leitura.leitura) {
      this.alert.erro("Leia as regras", "Você não leu as regras né -_-", false, 2500);
      let i = setInterval(() => {
        this.router.navigate(['/regras']);
        clearInterval(i);
      }, 2500);
    }
    else if (nivel != null && nivel.nivel_atual >= 1) {
      let u = nivel.nivel_atual;
      if (u == 1) {
        this.router.navigate(['/CONGRATULATIONS']);
      }
      else if (u == 2) {
        this.router.navigate(['/VictoriaEldridge']);
      }
    }
    else {
      this.router.navigate(['/whereIam']);
    }
  }
}
