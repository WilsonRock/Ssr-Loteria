import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  loading: boolean = false;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.loading = true;
    this.authService.login(this.email.toLowerCase(), this.password).subscribe((res: any) => {
      this.loading = false;
      localStorage.setItem('token', res.token)
      this.router.navigate(['/sales'])
    }, (error: any) => {
      this.loading = false;
      console.error(error.error)
    })
  }
}
