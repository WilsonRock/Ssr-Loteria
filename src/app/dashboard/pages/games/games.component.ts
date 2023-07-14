import { Component, OnInit } from '@angular/core';
import { CurrencyDB, TimezoneDB } from '../../services/data';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  name: any = 'Blanca Velázquez Batista';
  timezone: any = {name: '', code: ''};
  timezones: any[] = [];
  currency: any = {name: '', code: ''};
  currencies: any[] = [];
  loading = false;

  config: any;

  settings: any[] = [];

  game_id: string = ''

  constructor(private messageService: MessageService, private gamesService: GamesService, private activatedrouter: ActivatedRoute) {
    this.activatedrouter.params.subscribe((params: any) => {
      this.game_id = params.id
    });

    this.getGames();
  }

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

  getGames() {
    this.gamesService.getGames().subscribe((res: any) => {
      let game = res.data.filter( (game: any) => game.id == this.game_id);

      this.config = JSON.parse(game[0].oportunidades)

      Object.keys(this.config).forEach((element: any) => {
        this.settings.push({key: element, ...this.config[element]})
      });
    })
  }

  updateGame() {
    let body = {
      oportunidades: this.config
    }
    this.gamesService.updateGames(body, this.game_id ).subscribe(( res: any ) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada con éxito' });
    })
  }

  updateValue(element: any, event: any) {
    this.config[element].value = event.target.value
  }

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
  }
}
