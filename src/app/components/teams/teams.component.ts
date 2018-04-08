import { ApifootballService } from './../../services/apifootball.service';
import { Component, OnInit } from '@angular/core';
import { Standings } from '../../models/standings';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teamName: Standings[];
  leagueName: any;

  constructor(private apifootballService: ApifootballService) { }

  ngOnInit() {
    this.apifootballService.getStandings().subscribe(data => {
      this.teamName = data;
      this.teamName.sort((a, b) => a.team_name.localeCompare(b.team_name));
      this.leagueName = this.teamName[0].league_name;
    });


  }

}
