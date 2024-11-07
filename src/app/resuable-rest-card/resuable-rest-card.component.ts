import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


interface Dish {
  name: string;
  price: number;
  description:string;
  imagesrc:string;
}

interface Restaurant {
  id: string;
  name: string;
  rating: number;
  address: string;
  imageSrc: string;
  review: string;
  dishes: Dish[];
}


@Component({
  selector: 'app-resuable-rest-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resuable-rest-card.component.html',
  styleUrl: './resuable-rest-card.component.css'
})
export class ResuableRestCardComponent {

  @Input() restaurant!: Restaurant;

  constructor(private router: Router) {}

  viewDetails() {
    console.log('dfadf');
    this.router.navigate(['/restaurant', this.restaurant.id]);
  }

}
