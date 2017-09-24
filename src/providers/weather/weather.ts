import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  private apiKey:string = '855580656fd6bc99';
  private url:string;

  constructor(public http: Http) {
    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/`;
  }

  getWeather (city:string, state:string) {
    return this.http.get(`${this.url}/${state}/${city}.json`)
        .map(res => res.json());
  }

}
