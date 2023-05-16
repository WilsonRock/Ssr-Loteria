import { Component, OnInit } from '@angular/core';
import { CurrencyDB, TimezoneDB } from '../../services/data';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  name: any = 'Hernando Jurado Acevedo';
  phone: any = 753119020;
  email: any = 'hernandoJuradoAcevedo@jourrapide.com';
  timezone: any = {name: '(UTC-05:00) Bogota, Lima, Quito', code: 'SA Pacific Standard Time'};
  timezones: any[] = [];
  currency: any = {name: 'US Dollar', code: 'USD'};
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
