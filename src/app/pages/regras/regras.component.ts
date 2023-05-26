import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/shared/service/cache.service';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {
  constructor(
    private cache:CacheService
  ){}

  ngOnInit(): void {
      let json = this.cache.regrasLidas();
      if(json == null){
        this.cache.lerRegras(1);
      }
  }

}
