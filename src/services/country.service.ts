import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../app/country/country.model';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
  }

  findCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://api.magicthegathering.io/v1/cards');
  }

}
