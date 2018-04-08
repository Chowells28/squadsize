import { Competitions } from './../../models/countries-competitions';
import { Country } from './../../models/countries';
import { ApifootballService } from './../../services/apifootball.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  countriesComps: Competitions[];

  constructor(private apifootballService: ApifootballService) { }

  ngOnInit() {
   this.apifootballService.getCountries().subscribe(data => {
     this.countries = data;
   });

   this.apifootballService.getCompetitions().subscribe(data => {
    this.countriesComps = data;
  });

  }

}
