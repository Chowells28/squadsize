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
import { HeaderComponent } from './components/header/header.component';
import { TablesCondensedComponent } from './components/tables-condensed/tables-condensed.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewsComponent,
    TablesComponent,
    FooterComponent,
    TeamsComponent,
    CountriesComponent,
    HeaderComponent,
    TablesCondensedComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApifootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
