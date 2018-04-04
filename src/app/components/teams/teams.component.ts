import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  arrData: any;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe(response => {
      this.arrData = response.json();
      console.log(this.arrData);
      this.arrData.sort((a, b) => a.team_name.localeCompare(b.team_name));
    });
  }

}
