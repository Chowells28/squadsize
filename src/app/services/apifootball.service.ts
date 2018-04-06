import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApifootballService {
  apiKey = '90c64bb9dfba276167f14f685b2abac4d401715ff075d60baad0cfe4e1052f1e';
  leagueId = '63';
  URL = 'https://apifootball.com/api/?';
  apiActionParams: any = [
    {
      actionGetCountries: 'action=get_countries'
    },
    {
      actionGetLeagues: 'action=get_leagues',
      optParamCountryId: 'country_id'
    },
    {
      actionGetStandings: 'action=get_standings',
      optParamLeagueId: 'league_id'
    },
    {
      actionGetEvents: 'action=get_events',
      fromDate: '',
      toDate: '',
      optParamCountryId: 'country_id',
      optParamLeagueId: 'league_id',
      optParamMatchId: 'match_id'
    },
    {
      actionGetOdds: 'action=get_odds',
      fromDate: '',
      toDate: '',
      optParamMatchId: 'match_id'
    },
    {
      actionGetH2H: 'action=get_H2H',
      optParamFirstTeam: 'firstTeam',
      optParamSecondTeam: 'secondTeam'
    }
  ];

  constructor(private http: Http) { }

  getCountries() {
    return this.http.get(this.URL + this.apiActionParams[0].actionGetCountries + '&APIkey=' + this.apiKey);
  }

}
