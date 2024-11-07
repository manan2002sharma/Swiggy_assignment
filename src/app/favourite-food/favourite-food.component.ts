import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favourite-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite-food.component.html',
  styleUrl: './favourite-food.component.css'
})
export class FavouriteFoodComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  favItems: { itemName: string; price: number; restaurant: string }[] = [];
  ngOnInit() {
    this.loadFav();
  }

  // Load cart data from session storage
  loadFav() {
    const favData = sessionStorage.getItem('favItems');
    if (favData) {
      this.favItems = JSON.parse(favData);
    }
  }
  removeItem(index: number) {
    this.favItems.splice(index, 1); 
    sessionStorage.setItem('favItems', JSON.stringify(this.favItems)); 
  }
}
