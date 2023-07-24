import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegrasComponent } from './pages/regras/regras.component';
import { E01Component } from './pages/enigmas/e01/e01.component';
import { E02Component } from './pages/enigmas/e02/e02.component';
import { E03Component } from './pages/enigmas/e03/e03.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'regras',
    component:RegrasComponent
  },
  {
    path: 'whereIam',
    component:E01Component
  },
  {
    path: 'CONGRATULATIONS',
    component:E02Component
  },
  {
    path: 'VictoriaEldridge',
    component:E03Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
