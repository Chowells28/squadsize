import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StandingsService {
  leagueId = '63';
  APIkey = '90c64bb9dfba276167f14f685b2abac4d401715ff075d60baad0cfe4e1052f1e';
  URL = 'https://apifootball.com/api/?action=get_standings&league_id=' + this.leagueId + '&APIkey=' + this.APIkey;

  constructor(private http: Http) { }

  getStandings() {
    return this.http.get(this.URL);
  }

}
