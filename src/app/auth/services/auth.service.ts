import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${ environment.api }/api/login`, {email, password})
  }

  checkAuthentication(): Observable<boolean> {
    if(!localStorage.getItem('token')) return of(false);

    return of(true)
  }

  logout() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${ environment.api }/api/v1/logout`, null, { headers })
  }
}
