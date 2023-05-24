import { Component, OnInit } from '@angular/core';
import { ISale, ISaleTable } from '../../interfaces/sales.interface';
import { salesDB } from '../../services/data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

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
