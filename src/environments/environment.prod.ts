import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  api: 'https://api-dev.mypagatodo.com',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};