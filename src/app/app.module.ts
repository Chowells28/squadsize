import { ApifootballService } from './services/apifootball.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NewsComponent } from './components/news/news.component';
import { TablesComponent } from './components/tables/tables.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CountriesComponent } from './components/countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewsComponent,
    TablesComponent,
    FooterComponent,
    TeamsComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApifootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
