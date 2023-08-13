import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrInfoSaleService {
  private headers: any;

constructor(private http: HttpClient) { }

getqr(data?: any,data2?: any): Observable<any> {
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ localStorage.getItem('token') }`
  });
  let params:any = new HttpParams();
  params = params.append('id',data);
  return this.http.get(`${ environment.api }/api/v1/qrg`,{ headers: this.headers, params  })
  }

}