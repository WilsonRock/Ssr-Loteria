import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ISale, ISaleTable } from '../../interfaces/sales.interface';
import { salesDB } from '../../services/data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  @ViewChild('filter') filter!: ElementRef;

  loading: boolean = false;
  cols: any[] = [];
  sales: ISaleTable[] = []

  constructor() {}

  ngOnInit() {
    this.getSales();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Vendedor' },
      { field: 'betNumber', header: 'Número apostado' },
      { field: 'amount', header: 'Precio' },
      { field: 'prizeWon', header: 'Premio' },
      { field: 'createdAt', header: 'Fecha' },
      { field: 'stateSale', header: 'Estado' },
    ];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  getSales(): void {
    salesDB.forEach((element: ISale) => {
      this.sales.push({
        id: element.id,
        name: element.commerce.name,
        amount: element.amount,
        prizeWon: element.prizeWon,
        createdAt: new Date(element.createdAt).toLocaleString(),
        betNumber: +element.betNumber,
        stateSale: element.stateSale.description
      })
    });
  }

}
