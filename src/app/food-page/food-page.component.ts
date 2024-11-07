import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ResuableRestCardComponent } from '../resuable-rest-card/resuable-rest-card.component';

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
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,ResuableRestCardComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  restaurants$!: Observable<Restaurant[]>;
  filteredRestaurants$: Observable<Restaurant[]> = new Observable<Restaurant[]>();

  constructor(private route: ActivatedRoute,private restaurantService: RestaurantService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // First, get the restaurants$ observable from the service
    this.filteredRestaurants$ = this.route.queryParams.pipe(
      switchMap(params => {
        const foodId = params['foodid'];
        this.food$.next(foodId);
        return this.restaurantService.restaurants$.pipe(
          map(restaurants => this.filterRestaurantsByDish(restaurants, this.food$.getValue()))
        );
      })
    );
    
  }

  filterRestaurantsByDish(restaurants: Restaurant[], dishName: string | null): Restaurant[] {
    if (!dishName) return restaurants;

    const lowerCaseDishName = dishName.toLowerCase();
    return restaurants.filter(restaurant =>
      restaurant.dishes.some(dish => dish.name.toLowerCase().includes(lowerCaseDishName))
    );
  }

}
