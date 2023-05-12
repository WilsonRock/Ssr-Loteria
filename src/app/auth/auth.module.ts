import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './pages/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ]
})
export class AuthModule { }
