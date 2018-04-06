import { ApifootballService } from './../../services/apifootball.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private apifootballService: ApifootballService) { }

  ngOnInit() {

  }

}
