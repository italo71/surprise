import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sessao } from 'src/app/shared/model/sessao';
import { AlertService } from 'src/app/shared/service/alert.service';
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
  requestOn: boolean = false;
  constructor(
    private session: SessionService,
    private alert: AlertService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  togglePassword() {
    this.exibirSenha = !this.exibirSenha;
  }

  entrar() {
    if (this.requestOn) return;
    $('.password_inccorect').addClass('none');
    let login: any = $('#login_input').val();
    let senha: any = $('#senha_input').val();
    if (!login) {
      $('.password_inccorect').text('Informe o usuário');
      $('.password_inccorect').removeClass('none');
      return;
    }
    if (!senha) {
      $('.password_inccorect').text('Informe a senha');
      $('.password_inccorect').removeClass('none');
      return;
    }
    this.requestOn = true;
    this.session.logar(login, senha).subscribe((data: any) => {
      let s = new sessao();
      data.ativa = true;
      s.map(data);
      this.session.iniciarSessao(s);
      this.requestOn = false;
      this.alert.sussecc("Sucesso", "você será redirecionado em instantes");
      this.session.buscarUltimoNivelBack().subscribe((data: any) => {
        console.log(data);
      }, (err: any) => {
        
      })
      this.router.navigate(['/home']);
    }, (err: HttpErrorResponse) => {
      if (err.status == 401) {
        $('.password_inccorect').text('Senha incorreta');
        $('.password_inccorect').removeClass('none');
      }
      else if (err.status == 404) {
        $('.password_inccorect').text('Usuário não encontrado');
        $('.password_inccorect').removeClass('none');
      }
      else if (err.status == 400) {
        $('.password_inccorect').text('Informe a senha');
        $('.password_inccorect').removeClass('none');
      }
      this.requestOn = false;
    });
  }
}
