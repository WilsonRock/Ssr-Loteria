import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class RafflesService {
  private headers: any;

  constructor(private http: HttpClient) { }
  
  getRaffles(game: any) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.get(`${ environment.api }/api/v1/sorteo?juego_id=${ game }`, { headers: this.headers })
  }
}