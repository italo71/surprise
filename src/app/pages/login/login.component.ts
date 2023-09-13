import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = '';
  senha: string = '';
  exibirSenha: boolean = false;
  constructor(
    private session: SessionService
  ) {

  }

  ngOnInit(): void {

  }

  togglePassword() {
    this.exibirSenha = !this.exibirSenha;
  }

  entrar() {
    let login: any = $('#login_input input').val();
    let senha: any = $('#senha_input input').val();
    this.session.logar(login, senha).subscribe((data: any) => {
      console.log(data);
    })
  }
}
