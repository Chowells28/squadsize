import { Component, OnInit } from '@angular/core';
import { StandingsService } from './../../services/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  standingsData: any;

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getStandings().subscribe(response => {
      this.standingsData = response.json();
      this.standingsData.sort((a, b) => a.overall_league_position - b.overall_league_position);
      console.log(this.standingsData);
    });
  }

}
