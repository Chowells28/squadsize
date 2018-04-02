import { StandingsService } from './services/standings.service';
import { FixturesService } from './services/fixtures.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FixturesComponent } from './compoments/fixtures/fixtures.component';
import { StandingsComponent } from './compoments/standings/standings.component';


@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    StandingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FixturesService, StandingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
