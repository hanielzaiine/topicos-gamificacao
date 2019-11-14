import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { NiveisComponent } from './niveis/niveis.component';
import { NFacilComponent } from './n-facil/n-facil.component';
import { RankingComponent } from './ranking/ranking.component';
import { NNormalComponent } from './n-normal/n-normal.component';
import { NDificilComponent } from './n-dificil/n-dificil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NiveisComponent,
    NFacilComponent,
    RankingComponent,
    NNormalComponent,
    NDificilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
