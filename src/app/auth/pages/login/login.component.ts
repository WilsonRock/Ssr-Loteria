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
  email: string = 'test@gisoft.co';
  password: string = 'Abcd.1234';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.loading = true;

    setTimeout(() => {
      this.authService.login(this.email, this.password)
      this.router.navigate(['/'])
      this.loading = false;
    }, 1000);
  }
}
