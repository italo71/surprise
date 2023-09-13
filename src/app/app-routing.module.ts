import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegrasComponent } from './pages/regras/regras.component';
import { E01Component } from './pages/enigmas/e01/e01.component';
import { E02Component } from './pages/enigmas/e02/e02.component';
import { E03Component } from './pages/enigmas/e03/e03.component';
import { H01Component } from './pages/historia/h01/h01.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'regras',
    component: RegrasComponent
  },
  {
    path: 'whereIam',
    component: E01Component
  },
  {
    path: 'CONGRATULATIONS',
    component: E02Component
  },
  {
    path: 'VictoriaEldridge',
    component: E03Component
  },
  {
    path: 'receptor',
    component: H01Component
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
