import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/assets/enviroment/enviroment';
import { SessionService } from './session.service';
import { ComunicationService } from './comunication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected ws: string = enviroment.url;
  constructor(
    private http: HttpClient,
    private session: SessionService,
    private comu: ComunicationService
  ) { }


}
