import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RafflesService } from '../../services/raffles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-raffles',
  templateUrl: './raffles.component.html',
  styleUrls: ['./raffles.component.scss']
})
export class RafflesComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef;
  
  visible: boolean = false;
  visible1: boolean = false;
  fecha_inicio: string = '';
  fecha_final: string = '';
  loading: boolean = false;
  cols: any[] = [];
  raffles: any[] = [];
  game = '';
  config: any;

  constructor(private rafflesService: RafflesService, private activatedrouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'initialDate', header: 'Fecha Inicio' },
      { field: 'finalDate', header: 'Fecha Final' },
      { field: 'status', header: 'Estado' }
    ];
    this.activatedrouter.params.subscribe((params: any) => {
      this.game = params.id;
      this.getRaffles()
    });
  }

  showDialog() {
    this.fecha_final = '';
    this.fecha_inicio = '';
    this.visible = true;
  }
  showEditDialog(raffle: any) {
    this.fecha_final = '';
    this.fecha_inicio = '';
    
    this.rafflesService.getRafflesById(raffle.id).subscribe((res: any) => {
      this.config = [];
      this.visible1 = true;
      Object.keys(JSON.parse(res.data?.configuracion)).forEach((element: any) => {
        this.config.push({key: element, ...JSON.parse(res.data?.configuracion)[element]})
      });
    })
  }

  goToReport(raffle: any) {
    this.router.navigateByUrl(`raffle/${ raffle.id }/report`)
  }

  getRaffles() {
    this.loading = true;
    this.raffles = [];
    this.rafflesService.getRaffles(this.game).subscribe((res: any) => {
      res.data.forEach((element: any) => {
        this.raffles.push({
          id: element.id,
          initialDate: element.fecha_inicio,
          finalDate: element.fecha_final,
          status: element.active ? 'Activo' : 'Inactivo',
        })
      });

      this.loading = false;
    })
  }

  createRaffle() {
    let raffle = {
      fecha_inicio: this.fecha_inicio,
      fecha_final: this.fecha_final,
      juego_id: this.game
    }

    this.rafflesService.createRaffle(raffle).subscribe((res: any) => {

      this.visible = false;

    })
  }

  updateRaffle(raffle: any) {
    this.visible = false;
    
    /* this.rafflesService.createRaffle(raffle).subscribe((res: any) => {


    }) */
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  updateValue(key: any, value: any) {
    console.log({key, value});
  }

}
