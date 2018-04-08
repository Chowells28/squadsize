import { Competitions } from './../models/countries-competitions';
import { Country } from './../models/countries';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { Standings } from '../models/standings';

@Injectable()
export class ApifootballService {
  countries: Country[];
  countriesComps: Competitions[];
  tableStandings: Standings[];

  apiKey = '90c64bb9dfba276167f14f685b2abac4d401715ff075d60baad0cfe4e1052f1e';
  countryId = '169';
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

  constructor(private http: Http) {
    const todayDate = moment();
    // console.log(todayDate.format('YYYY/MM/DD'));
   }

  getCountries(): Observable<Country[]> {
    return this.http.get(this.URL + this.apiActionParams[0].actionGetCountries + '&APIkey=' + this.apiKey)
    .map(res => this.countries = res.json());
  }

  getCompetitions(): Observable<Competitions[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.URL + this.apiActionParams[1].actionGetLeagues + '&' + '&APIkey=' + this.apiKey)
    .map(res => this.countriesComps = res.json());
  }

  getStandings(): Observable<Standings[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.URL + this.apiActionParams[2].actionGetStandings + '&' + this.apiActionParams[2].optParamLeagueId + '=' + this.leagueId + '&APIkey=' + this.apiKey)
    .map(res => this.tableStandings = res.json());
  }

}
