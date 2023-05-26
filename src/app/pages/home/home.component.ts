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
    if (leitura == null) {
      this.alert.erro("Leia as regras", "Você não leu as regras né -_-", false, 2500);
      let i = setInterval(() => {
        this.router.navigate(['/regras']);
        clearInterval(i);
      }, 2500);
    }
  }
}
