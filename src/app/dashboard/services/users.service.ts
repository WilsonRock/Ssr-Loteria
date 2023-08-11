import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UsersService {
  private headers: any;
  private updateUsers = new Subject<boolean>();
  public updateUsers$ = this.updateUsers.asObservable();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }

  eventUpdateUsers = (value: boolean) => this.updateUsers.next(value);
  
  getUsers(params?: any): Observable<any> {
    params = {
      tipo_usuario: 'vendedor'
    }
    return this.http.get(`${ environment.api }/api/v1/usuarios`, { headers: this.headers, params })
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${ environment.api }/api/v1/usuario`, data, { headers: this.headers })
  }
}