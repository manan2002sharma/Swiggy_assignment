import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ResuableFoodCardComponent } from '../resuable-food-card/resuable-food-card.component';

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
  selector: 'app-rest-menu-page',
  standalone: true,
  imports: [CommonModule,ResuableFoodCardComponent],
  templateUrl: './rest-menu-page.component.html',
  styleUrl: './rest-menu-page.component.css'
})
export class RestMenuPageComponent {
  restaurantId: string|null = null;
  restaurant$!: Observable<Restaurant| undefined>;
  constructor(private route: ActivatedRoute,private restaurantService: RestaurantService) {}



  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    if (this.restaurantId) {
      this.restaurant$ = this.restaurantService.getRestaurantById(this.restaurantId);
    }
    console.log(this.restaurantId);
    console.log(this.restaurant$)
  }
}
