import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { ResuableRestCardComponent } from '../resuable-rest-card/resuable-rest-card.component';
import { Router } from '@angular/router';
import { FavouriteFoodComponent } from '../favourite-food/favourite-food.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

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
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,ResuableRestCardComponent,RouterModule,FavouriteFoodComponent,ReactiveFormsModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  username: string | null = null;
  isFavopen:boolean=false;

  foodItems = [
    { name: 'Pizza', imageUrl: 'assets/Pizza.png', source: 'Source 1' },
    { name: 'Biryani', imageUrl: 'assets/Biryani.png', source: 'Source 2' },
    { name: 'Burger', imageUrl: 'assets/Burger.png', source: 'Source 3' },
    { name: 'Chinese', imageUrl: 'assets/Chinese.png', source: 'Source 5' },
    { name: 'Chole Bhature', imageUrl: 'assets/Chole_Bhature.png', source: 'Source 6' },
    { name: 'Dosa', imageUrl: 'assets/Dosa.png', source: 'Source 8' },
    { name: 'Noodles', imageUrl: 'assets/Noodles.png', source: 'Source 9' },
    { name: 'North Indian', imageUrl: 'assets/North_Indian.png', source: 'Source 10' },
    { name: 'Paratha', imageUrl: 'assets/Paratha.png', source: 'Source 11' },
    { name: 'Pasta', imageUrl: 'assets/Pasta.png', source: 'Source 12' },
    { name: 'Pastry', imageUrl: 'assets/Pastry.png', source: 'Source 13' },
    { name: 'Pav Bhaji', imageUrl: 'assets/Pav_Bhaji.png', source: 'Source 14' },
    { name: 'Poori', imageUrl: 'assets/Poori.avif', source: 'Source 15' },
    { name: 'Pure Veg', imageUrl: 'assets/Pure_Veg.png', source: 'Source 16' },
    { name: 'Rasmalai', imageUrl: 'assets/Rasmalai.png', source: 'Source 17' },
    { name: 'Rolls', imageUrl: 'assets/Rolls.png', source: 'Source 18' },
    { name: 'Salad', imageUrl: 'assets/Salad.png', source: 'Source 19' },
    { name: 'Shake', imageUrl: 'assets/Shake.png', source: 'Source 20' }
  ];

  restaurants$!: Observable<Restaurant[]>;


  searchControl = new FormControl(''); // Form control for search input
  filteredRestaurants$!: Observable<Restaurant[]>;



  constructor(private authService: LoginService,private restaurantService: RestaurantService) {}
 
  ngOnInit() {
    this.authService.userData$.subscribe((userData) => {
      this.username = userData ? userData.username : null; // Get username from user data
    });
    this.restaurants$ = this.restaurantService.restaurants$;

    // Combine search control and restaurant observable to filter results
    this.filteredRestaurants$ = combineLatest([
      this.restaurants$,
      this.searchControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([restaurants, searchTerm]) => {
        const lowerCaseSearchTerm = (searchTerm || '').toLowerCase();
        return restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().startsWith(lowerCaseSearchTerm)
        );
      })
    );
  }


  logout():void{
    this.authService.logout();
  }

  scrollLeft(element: HTMLElement) {
    element.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(element: HTMLElement) {
    element.scrollBy({ left: 200, behavior: 'smooth' });
  }

  openfav(){
    this.isFavopen=true;
    console.log("adf")
  }
}
