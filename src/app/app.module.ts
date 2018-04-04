import { FixturesService } from './services/fixtures.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FixturesComponent } from './compoments/fixtures/fixtures.component';
import { StandingsComponent } from './compoments/standings/standings.component';
import { NavComponent } from './components/nav/nav.component';
import { NewsComponent } from './components/news/news.component';
import { TablesComponent } from './components/tables/tables.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsService } from './services/teams.service';


@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    StandingsComponent,
    NavComponent,
    NewsComponent,
    TablesComponent,
    FooterComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FixturesService, TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
