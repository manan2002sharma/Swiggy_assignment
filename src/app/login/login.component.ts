import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password='';
  username='';  
  loginError='';

  constructor(private loginservice: LoginService,private router: Router) {}

  onLogin() {
    this.loginservice.login(this.username, this.password).subscribe({
      next: (user) => {
        if (user) {
          console.log('Login successful', user);
          this.loginError = '';
          this.router.navigate(['/home']);
        } else {
          this.loginError = 'Invalid username or password';
        }
      },
      error: () => {
        this.loginError = 'Login failed';
      },
    });
  }
}
