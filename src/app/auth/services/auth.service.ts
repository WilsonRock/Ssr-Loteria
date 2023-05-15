import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string) {
    localStorage.setItem('user', `${ username } - ${ password }`)
  }

  checkAuthentication(): Observable<boolean> {
    if(!localStorage.getItem('user')) return of(false);

    return of(true)
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
