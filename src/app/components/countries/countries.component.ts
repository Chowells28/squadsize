import { ApifootballService } from './../../services/apifootball.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any;

  constructor(private apifootballService: ApifootballService) { }

  ngOnInit() {
    this.apifootballService.getCountries().subscribe(response => {
      this.countries = response.json();
      console.log(this.countries);
    });

  }

}
