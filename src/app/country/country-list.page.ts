import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Country} from './country.model';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'trg-country-list',
  templateUrl: './country-list.page.html',
})
export class CountryListPage implements OnInit {

  public columns = ['name', 'population', 'flag'];
  datasource: Observable<Country[]>;

  constructor(private countryService: CountryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.datasource = this.countryService.findCountries();
  }

  view(country: Country): void {
    console.log(JSON.stringify(country));
    this.router.navigate(['/country/', country.name]);
  }

}
