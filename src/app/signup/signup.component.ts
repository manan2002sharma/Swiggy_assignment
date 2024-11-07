import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = '';
  password = '';
  signupError = '';

  constructor(private signupservice: LoginService,private router: Router) {}

  onSignup() {
    this.signupservice.signup(this.username, this.password).subscribe({
      next: (user) => {
        console.log('Signup successful', user);
        this.signupError = '';
        this.router.navigate(['/login']);
      },
      error: () => {
        this.signupError = 'Signup failed due to server error or user already exists';
      },
    });
  }
}
