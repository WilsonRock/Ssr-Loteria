import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private headers: any;

  constructor(private http: HttpClient) {
    
  }
  
  getSales(params?: any): Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    params = {
      size: 100,
      page: 1,
      type: 'venta',
      initial_date: '2021-01-01',
      final_date: '2023-12-31'
    }
    return this.http.get(`${ environment.api }/api/v1/ventas`, { headers: this.headers, params })
  }
}