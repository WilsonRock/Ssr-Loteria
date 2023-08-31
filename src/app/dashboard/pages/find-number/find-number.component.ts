import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RafflesService } from '../../services/raffles.service';

@Component({
  selector: 'app-find-number',
  templateUrl: './find-number.component.html',
  styleUrls: ['./find-number.component.scss']
})
export class FindNumberComponent implements OnInit {

  constructor(private raffleService: RafflesService) {}

  
  @ViewChild('filter') filter!: ElementRef;
  
  loading: boolean = false;
  cols: any[] = [];
  boletos: any[] = [];
  number: string = '';
  
  /* onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  } */
  ngOnInit(): void {
    this.cols = [
      { field: 'dateRaffle', header: 'Fecha Sorteo' },
      { field: 'ticket', header: 'Números Boleto' },
      { field: 'sorprise', header: 'Número Sorpresa' },
      { field: 'status', header: 'Estado' }
    ];
  }

  search() {
    this.loading = true;
    this.boletos = [];
    this.raffleService.findNumber(this.number).subscribe((res: any) => {
      res.data.forEach((element: any) => {
        if(element.boletos.length > 0) {
          this.boletos.push({
            dateRaffle: element.sorteo.fecha_inicio + ' - ' + element.sorteo.fecha_final,
            ticket: element.boletos[0].numeros,
            sorprise: element.boletos[0].sorpresa,
            status: element.boletos[0].status == null ? 'No vendido' : element.boletos[0].status,
          })
        }
      });

      this.loading = false;
    })
    /* table.filterGlobal((event.target as HTMLInputElement).value, 'contains'); */
  }

}
