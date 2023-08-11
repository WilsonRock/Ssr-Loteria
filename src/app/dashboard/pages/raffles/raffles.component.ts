import { Component, OnInit } from '@angular/core';
import { RafflesService } from '../../services/raffles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raffles',
  templateUrl: './raffles.component.html',
  styleUrls: ['./raffles.component.scss']
})
export class RafflesComponent implements OnInit {
  visible: boolean = false;
  fecha_inicio: string = '';
  fecha_final: string = '';
  loading: boolean = false;
  cols: any[] = [];
  raffles: any[] = [];
  game = '';

  constructor(private rafflesService: RafflesService, private activatedrouter: ActivatedRoute) {}

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
    this.visible = false;
  }

}
