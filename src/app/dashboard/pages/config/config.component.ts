import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyDB, TimezoneDB } from '../../services/data';
import { MessageService } from 'primeng/api';
import { DashboardService } from '../../services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit, OnDestroy {
  name: any = '';
  phone: any = '';
  email: any = '';
  timezone: any = {name: '', code: ''};
  timezones: any[] = [];
  currency: any = {name: '', code: ''};
  currencies: any[] = [];
  loading = false;
  commerce_id: string = '';
  destroy: any;

  constructor(private messageService: MessageService, private dashboardService: DashboardService, private activatedrouter: ActivatedRoute) {
    this.destroy = this.dashboardService.updateCommerces$.subscribe(data => {
      if (data) {
        this.getCommerces();
      }
    });
    this.activatedrouter.params.subscribe((params: any) => {
      this.commerce_id = params.commerce
    });
    this.getCommerces();
  }

  ngOnInit() {
    this.getTimezones();
    this.getCurrencies();
  }

  ngOnDestroy() {
    this.destroy.unsubscribe();
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

  getCommerces() {
		this.dashboardService.getCommerces().subscribe((res: any) => {
		  this.timezone = JSON.parse(res.data[0].zona_horaria);
      this.currency = JSON.parse(res.data[0].moneda);
      this.name = res.data[0].nombre_contacto;
      this.phone = res.data[0].telefono_contacto;
      this.email = res.data[0].email;
		})
	}

  updateCommerce() {
    let body = {
      "zona_horaria": this.timezone,
      "moneda": this.currency,
      "nombre_contacto": this.name,
      "telefono_contacto": this.phone,
      "email": this.email,
    }
    this.dashboardService.updateCommerce(body, this.commerce_id).subscribe((res: any) => {
      this.dashboardService.eventupdateCommerces(true);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada con éxito' });
    })
  }

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada con éxito' });
    }, 2000);
  }
}
