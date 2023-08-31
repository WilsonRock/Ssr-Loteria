import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { RafflesService } from '../../services/raffles.service';
import { ActivatedRoute } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-report-tickets',
  templateUrl: './report-tickets.component.html',
  styleUrls: ['./report-tickets.component.scss']
})
export class ReportTicketsComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef;
  loading: boolean = false;
  cols: any[] = [];
  /* boletos: any[] = []; */
  number: string = '';
  raffle: string = '';
  tickets: any[] = [];

  constructor(private rafflesService: RafflesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.cols = [
      /* { field: 'id', header: 'Id' }, */
      { field: 'numbers', header: 'Números Boleto' },
      { field: 'sorprise', header: 'Número Sorpresa' },
      { field: 'seller', header: 'Vendedor' },
      { field: 'status', header: 'Estado' }
    ];

    this.activatedRoute.params.subscribe((params: any) => {
      this.raffle = params.id;
      this.getReport();
    });
  }

  getReport() {
    this.loading = true;
    this.rafflesService.reportTickets(this.raffle).subscribe((res: any) => {
      res.data.forEach((element: any) => {
        this.tickets.push({
          id: element.id,
          numbers: element.numeros,
          sorprise: element.sorpresa,
          seller: element.user == null ? 'sin asignar' : element.user.firstName + ' ' + element.user.lastName,
          status: element.status == null ? 'sin asignar' : element.status,
        })
      });

      this.loading = false;

    })
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
