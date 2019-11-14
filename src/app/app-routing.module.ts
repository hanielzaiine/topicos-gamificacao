import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from './login/login.component';
import { NiveisComponent } from './niveis/niveis.component';
import { NFacilComponent } from './n-facil/n-facil.component';
import { NNormalComponent } from './n-normal/n-normal.component';
import { NDificilComponent } from './n-dificil/n-dificil.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'niveis', component: NiveisComponent },
  { path: 'nivel-facil', component: NFacilComponent},
  { path: 'nivel-normal', component: NNormalComponent},
  { path: 'nivel-dificil', component: NDificilComponent},
  { path: 'ranking', component: RankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
