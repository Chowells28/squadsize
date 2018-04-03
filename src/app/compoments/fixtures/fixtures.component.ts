import { Component, OnInit } from '@angular/core';
import { FixturesService } from '../../services/fixtures.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  fixturesData: any;
  isPostponed = true;

  constructor(private fixturesService: FixturesService) { }

  ngOnInit() {
    this.fixturesService.getFixtures().subscribe(response => {
      this.fixturesData = response.json();
      console.log(this.fixturesData);
    });

  }

}
