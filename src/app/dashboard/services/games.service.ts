import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class GamesService {
  private headers: any;
  game_id: any;

  constructor(private http: HttpClient) {
  }

  getGames(): Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get(`${ environment.api }/api/v1/juego`, { headers: this.headers })
  }

  updateGames(data: any, game_id: string): Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.patch(`${ environment.api }/api/v1/juego/${game_id}`, data, { headers: this.headers })
  }

  getAllCombinations(game_id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get(`${ environment.api }/api/v1/obtener-todos-boletos?juego_id=${game_id}`, { headers: this.headers })
  }

  reserveTickets(data: any) {
    return this.http.post(`${ environment.api }/api/v1/asignar-boletos`, data, { headers: this.headers })
  }
  
}