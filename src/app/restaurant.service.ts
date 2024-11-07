import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

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


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantsSubject = new BehaviorSubject<Restaurant[]>([
    {
      id: "r1",
      name: "The Pizza Place",
      rating: 4.5,
      address: "123 Pizza Street, Food City",
      imageSrc: "assets/restaurants/warehouse_cafe.jpg",
      review: "The best pizza in town!",
      dishes: [
        { name: "Margherita Pizza", price: 9.99, description: "Classic pizza with fresh mozzarella and basil.", imagesrc: "assets/margherita-pizza.jpg" },
        { name: "Pepperoni Pizza", price: 11.99, description: "Pizza topped with spicy pepperoni slices.", imagesrc: "assets/pepperoni-pizza.jpg" },
        { name: "Vegetarian Pizza", price: 10.99, description: "Pizza topped with a variety of fresh vegetables.", imagesrc: "assets/vegetarian-pizza.jpg" },
        { name: "BBQ Chicken Pizza", price: 12.99, description: "Pizza with BBQ chicken and caramelized onions.", imagesrc: "assets/bbq-chicken-pizza.jpg" },
        { name: "Cheese Sticks", price: 6.99, description: "Cheesy breadsticks with marinara sauce.", imagesrc: "assets/cheese-sticks.jpg" }
      ]
    },
    {
      id: "r2",
      name: "Burger Joint",
      rating: 4.2,
      address: "456 Burger Lane, Grub Town",
      imageSrc: "assets/restaurants/zaffran.jpg",
      review: "The juiciest burgers in the city.",
      dishes: [
        { name: "Classic Burger", price: 8.99, description: "A classic beef burger with lettuce, tomato, and cheese.", imagesrc: "assets/classic-burger.jpg" },
        { name: "Cheeseburger", price: 9.49, description: "Beef patty with cheddar cheese, lettuce, and tomato.", imagesrc: "assets/cheeseburger.jpg" },
        { name: "Bacon Burger", price: 10.99, description: "Beef patty with crispy bacon, lettuce, and cheddar.", imagesrc: "assets/bacon-burger.jpg" },
        { name: "Veggie Burger", price: 8.49, description: "A vegetarian patty with lettuce, tomato, and avocado.", imagesrc: "assets/veggie-burger.jpg" },
        { name: "Onion Rings", price: 4.99, description: "Crispy battered onion rings.", imagesrc: "assets/onion-rings.jpg" }
      ]
    },
    {
      id: "r3",
      name: "Sushi World",
      rating: 4.7,
      address: "789 Sushi Blvd, Ocean City",
      imageSrc: "assets/restaurants/akra.jpg",
      review: "Authentic Japanese sushi with fresh ingredients.",
      dishes: [
        { name: "California Roll", price: 10.99, description: "Sushi roll with crab, avocado, and cucumber.", imagesrc: "assets/california-roll.jpg" },
        { name: "Spicy Tuna Roll", price: 12.49, description: "Tuna, spicy mayo, and avocado rolled in rice and seaweed.", imagesrc: "assets/spicy-tuna-roll.jpg" },
        { name: "Salmon Nigiri", price: 8.99, description: "Fresh salmon atop a small mound of rice.", imagesrc: "assets/salmon-nigiri.jpg" },
        { name: "Tempura Roll", price: 13.49, description: "Fried shrimp and vegetables rolled in rice and seaweed.", imagesrc: "assets/tempura-roll.jpg" },
        { name: "Edamame", price: 4.99, description: "Steamed young soybeans, lightly salted.", imagesrc: "assets/edamame.jpg" }
      ]
    },
    {
      id: "r4",
      name: "Taco Fiesta",
      rating: 4.3,
      address: "321 Taco Drive, Spiceville",
      imageSrc: "assets/restaurants/bercos.jpg",
      review: "Flavorful tacos with a variety of toppings.",
      dishes: [
        { name: "Beef Taco", price: 3.99, description: "Taco filled with seasoned ground beef, lettuce, and cheese.", imagesrc: "assets/beef-taco.jpg" },
        { name: "Chicken Taco", price: 4.49, description: "Grilled chicken with salsa, guacamole, and cheese in a soft shell.", imagesrc: "assets/chicken-taco.jpg" },
        { name: "Fish Taco", price: 5.99, description: "Crispy fried fish with cabbage slaw and spicy mayo.", imagesrc: "assets/fish-taco.jpg" },
        { name: "Veggie Taco", price: 3.49, description: "Roasted vegetables with beans, cheese, and salsa.", imagesrc: "assets/veggie-taco.jpg" },
        { name: "Quesadilla", price: 7.49, description: "Grilled flour tortilla filled with cheese, served with sour cream.", imagesrc: "assets/quesadilla.jpg" }
      ]
    },
    {
      id: "r5",
      name: "Pasta Paradise",
      rating: 4.8,
      address: "654 Pasta Street, Saucy Town",
      imageSrc: "assets/restaurants/cafe_hawkers.jpg",
      review: "Rich and creamy pasta dishes that will leave you craving for more.",
      dishes: [
        { name: "Spaghetti Bolognese", price: 12.99, description: "Spaghetti with a rich meat sauce and parmesan cheese.", imagesrc: "assets/spaghetti-bolognese.jpg" },
        { name: "Fettuccine Alfredo", price: 13.49, description: "Fettuccine in a creamy Alfredo sauce with grilled chicken.", imagesrc: "assets/fettuccine-alfredo.jpg" },
        { name: "Penne Arrabbiata", price: 11.99, description: "Penne pasta in a spicy tomato sauce with garlic and chili flakes.", imagesrc: "assets/penne-arrabbiata.jpg" },
        { name: "Lasagna", price: 14.49, description: "Layers of pasta, meat, cheese, and tomato sauce, baked to perfection.", imagesrc: "assets/lasagna.jpg" },
        { name: "Garlic Bread", price: 4.49, description: "Toasted bread with garlic butter and parmesan.", imagesrc: "assets/garlic-bread.jpg" }
      ]
    },
    {
      id: "r6",
      name: "Cafe Delights",
      rating: 4.1,
      address: "101 Cafe Avenue, Brewville",
      imageSrc: "assets/restaurants/ce_la_vie.jpg",
      review: "Freshly brewed coffee and delicious pastries.",
      dishes: [
        { name: "Espresso", price: 2.99, description: "Strong black coffee brewed to perfection.", imagesrc: "assets/espresso.jpg" },
        { name: "Cappuccino", price: 3.99, description: "Espresso with steamed milk and a layer of foam.", imagesrc: "assets/cappuccino.jpg" },
        { name: "Latte", price: 4.49, description: "Espresso with steamed milk and a small amount of foam.", imagesrc: "assets/latte.jpg" },
        { name: "Croissant", price: 2.49, description: "Flaky, buttery croissant served fresh out of the oven.", imagesrc: "assets/croissant.jpg" },
        { name: "Muffin", price: 2.99, description: "Warm, soft muffin available in various flavors.", imagesrc: "assets/muffin.jpg" }
      ]
    },
    {
      id: 'r7',
      name: 'BBQ Grill House',
      rating: 4.6,
      address: '222 BBQ Road, Meatville',
      imageSrc: 'assets/restaurants/china_bistro.jpg',
      review: 'Tender meats grilled to perfection with smoky flavor.',
      dishes: [
        { name: 'Grilled Ribs', price: 15.99, description: 'Smoked ribs with BBQ sauce, served with a side of fries.', imagesrc: 'assets/grilled-ribs.jpg' },
        { name: 'Steak', price: 18.49, description: 'Juicy steak with a side of mashed potatoes and veggies.', imagesrc: 'assets/steak.jpg' },
        { name: 'Grilled Chicken', price: 14.99, description: 'Chicken grilled with spices and served with rice.', imagesrc: 'assets/grilled-chicken.jpg' },
        { name: 'BBQ Sausages', price: 10.99, description: 'Smoked sausages served with a tangy BBQ sauce.', imagesrc: 'assets/bbq-sausages.jpg' },
        { name: 'Corn on the Cob', price: 3.99, description: 'Grilled corn with butter and seasoning.', imagesrc: 'assets/corn-on-cob.jpg' }
      ]
    },
    {
      id: "r8",
      name: "Indian Spice",
      rating: 4.9,
      address: "789 Curry Street, Flavor Town",
      imageSrc: "assets/restaurants/dhaba.jpg",
      review: "Authentic Indian flavors with rich spices.",
      dishes: [
        { name: "Butter Chicken", price: 13.99, description: "Tender chicken in a creamy tomato sauce.", imagesrc: "assets/butter-chicken.jpg" },
        { name: "Paneer Tikka", price: 12.49, description: "Grilled paneer with spices, served with mint chutney.", imagesrc: "assets/paneer-tikka.jpg" },
        { name: "Chole Bhature", price: 10.99, description: "Spiced chickpeas served with deep-fried bread.", imagesrc: "assets/chole-bhature.jpg" },
        { name: "Biryani", price: 14.99, description: "Fragrant rice with spices, chicken, and vegetables.", imagesrc: "assets/biryani.jpg" },
        { name: "Naan", price: 2.99, description: "Soft, fluffy flatbread.", imagesrc: "assets/naan.jpg" }
      ]
    },
    {
      id: "r9",
      name: "Thai Bites",
      rating: 4.4,
      address: "456 Curry Lane, Tasteville",
      imageSrc: "assets/restaurants/dr_zombie.jpg",
      review: "Delicious Thai dishes with bold flavors.",
      dishes: [
        { name: "Pad Thai", price: 11.99, description: "Rice noodles with tofu, peanuts, and lime.", imagesrc: "assets/pad-thai.jpg" },
        { name: "Green Curry", price: 13.49, description: "Spicy green curry with vegetables and tofu.", imagesrc: "assets/green-curry.jpg" },
        { name: "Tom Yum Soup", price: 8.99, description: "Hot and sour soup with shrimp and mushrooms.", imagesrc: "assets/tom-yum-soup.jpg" },
        { name: "Spring Rolls", price: 6.99, description: "Crispy rolls with vegetables and glass noodles.", imagesrc: "assets/spring-rolls.jpg" },
        { name: "Mango Sticky Rice", price: 5.49, description: "Sweet sticky rice with fresh mango slices.", imagesrc: "assets/mango-sticky-rice.jpg" }
      ]
    },
    {
      id: "r10",
      name: "Mexican Cantina",
      rating: 4.5,
      address: "789 Salsa Ave, Burritoville",
      imageSrc: "assets/restaurants/lord.jpg",
      review: "Fresh and zesty Mexican cuisine.",
      dishes: [
        { name: "Burrito", price: 9.99, description: "A large flour tortilla filled with beans, rice, and meat.", imagesrc: "assets/burrito.jpg" },
        { name: "Taco Salad", price: 8.49, description: "Salad with lettuce, tomato, cheese, and meat in a taco shell.", imagesrc: "assets/taco-salad.jpg" },
        { name: "Churros", price: 4.99, description: "Fried dough pastry with cinnamon sugar.", imagesrc: "assets/churros.jpg" },
        { name: "Guacamole", price: 3.99, description: "Fresh avocado dip with onions, tomatoes, and lime.", imagesrc: "assets/guacamole.jpg" },
        { name: "Queso Dip", price: 3.49, description: "Cheesy dip served with tortilla chips.", imagesrc: "assets/queso-dip.jpg" }
      ]
    }
  ]);
  public restaurants$: Observable<Restaurant[]> = this.restaurantsSubject.asObservable();
  constructor() { }

  getRestaurantById(id: string|null): Observable<Restaurant | undefined> {
    return this.restaurants$.pipe(
      map((restaurants) => restaurants.find((restaurant) => restaurant.id === id))
    );
  }
}
