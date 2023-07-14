import { Component, OnInit } from '@angular/core';
import { ISale, ISaleTable } from '../../interfaces/sales.interface';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  cols: any[] = [];
  sales: ISaleTable[] = [];
  loading: boolean = false;

  constructor(private salesService: SalesService) {}

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
    this.loading = true
    this.salesService.getSales().subscribe((res: any) => {
      res.data.data.forEach((element: any) => {
        this.sales.push({
          id: element.id,
          name: element.nombre_Vendedor + element.apellidos_Vendedor,
          amount: element.precio,
          prizeWon: element.premio,
          createdAt: new Date(element.created_at).toLocaleString(),
          betNumber: JSON.parse(element.caracteristicas)[0].numero,
          stateSale: JSON.parse(element.caracteristicas)[0].estado
        });
      });
      this.loading = false;
    })
  }

}
