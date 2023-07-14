import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class GamesService {
  private headers: any;

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
  
}