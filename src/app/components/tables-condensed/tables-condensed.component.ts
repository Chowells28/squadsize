import { ApifootballService } from './../../services/apifootball.service';
import { Standings } from './../../models/standings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-condensed',
  templateUrl: './tables-condensed.component.html',
  styleUrls: ['./tables-condensed.component.scss']
})
export class TablesCondensedComponent implements OnInit {
  tablePositions: Standings[];

  constructor(private apifootballService: ApifootballService) { }

  ngOnInit() {
    this.apifootballService.getStandings().subscribe(data => {
      this.tablePositions = data;
      this.tablePositions.sort((a, b) => {
        return a.overall_league_position - b.overall_league_position;
      });
      console.log(this.tablePositions);
    });
  }
}
