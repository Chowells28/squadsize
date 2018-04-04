import { Component, OnInit } from '@angular/core';
import { StandingsService } from './../../services/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  standingsData: any;
  standingsDataTeams: any [];
  setTeamNames: any;

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getStandings().subscribe(data => {
      this.standingsData = data.json();
      this.standingsData.sort((a, b) => a.overall_league_position - b.overall_league_position);
      // return this.standingsData;
      console.log('This is the response obj ', this.standingsData);
      for (let i = 0; i <= this.standingsData.length; i++) {
        this.standingsDataTeams.push(this.standingsData[i].team_name);
      }
    });
  }

}
