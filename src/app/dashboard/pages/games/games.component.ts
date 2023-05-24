import { Component, OnInit } from '@angular/core';
import { CurrencyDB, TimezoneDB } from '../../services/data';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  name: any = 'Blanca Velázquez Batista';
  timezone: any = {name: '(UTC-05:00) Bogota, Lima, Quito', code: 'SA Pacific Standard Time'};
  timezones: any[] = [];
  currency: any = {name: 'Colombian Peso', code: 'COP'};
  currencies: any[] = [];
  loading = false;

  ngOnInit() {
    this.getTimezones();
    this.getCurrencies();
  }

  getTimezones() {
    TimezoneDB.forEach((element: any) => {
      this.timezones.push({
        name: element.text,
        code: element.value
      })
    })
  }

  getCurrencies() {
    CurrencyDB.forEach((element: any) => {
      this.currencies.push({
        name: element.name,
        code: element.code
      })
    })
  }

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
  }
}
