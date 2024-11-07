import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() username: string | null = null;
  @Output() favOpened = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();

  openfav() {
    this.favOpened.emit();
  }
  logout(){
    this.logoutEvent.emit();
  }
}
