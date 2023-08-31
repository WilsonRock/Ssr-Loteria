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

  getRafflesById(id: any) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.get(`${ environment.api }/api/v1/sorteo-por-id?sorteo_id=${ id }`, { headers: this.headers })
  }

  createRaffle(raffle: any) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.post(`${ environment.api }/api/v1/sorteo`, raffle, { headers: this.headers })
  }

  findNumber(number: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${ environment.api }/api/v1/buscar-numero?numero=${ number }`, { headers: this.headers })
  }

  reportTickets(id_raffle: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${ environment.api }/api/v1/reporte-numeros`, { headers: this.headers, params: { id: id_raffle } })
  }
}