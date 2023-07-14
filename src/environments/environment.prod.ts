import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  api: 'http://13.58.125.222:80',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};