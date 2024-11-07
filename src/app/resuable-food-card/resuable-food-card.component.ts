import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resuable-food-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resuable-food-card.component.html',
  styleUrl: './resuable-food-card.component.css'
})
export class ResuableFoodCardComponent {
  @Input() name!:string;
  @Input() price!:number;
  @Input()  imageSrc!:string;

  constructor() {}

  //function to add item to cart
  addToCart(itemName: string, price: number ) {
    const cartItems = sessionStorage.getItem('cartItems');
    const items = cartItems ? JSON.parse(cartItems) : [];
    items.push({itemName,price});
    sessionStorage.setItem('cartItems', JSON.stringify(items));
    alert("item added to cart");
  }

  addToFav(itemName: string, price: number ){
    const favItems = sessionStorage.getItem('favItems');
    const items = favItems ? JSON.parse(favItems) : [];
    items.push({itemName,price});
    sessionStorage.setItem('favItems', JSON.stringify(items));
    alert("item added to favourites");
  }
}
