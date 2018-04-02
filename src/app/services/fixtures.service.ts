import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FixturesService {
  todayFixtures = '2018-04-02';
  leagueId = '63';
  APIkey = '90c64bb9dfba276167f14f685b2abac4d401715ff075d60baad0cfe4e1052f1e';
  // tslint:disable-next-line:max-line-length
  URL = 'https://apifootball.com/api/?action=get_events&from=' + this.todayFixtures + '&to=' + this.todayFixtures + '&league_id=' + this.leagueId + '&APIkey=' + this.APIkey;

  constructor(private http: Http) { }

  getFixtures() {
    return this.http.get(this.URL);
  }

}
