import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';
import { FoodPageComponent } from './food-page/food-page.component';
import { RestMenuPageComponent } from './rest-menu-page/rest-menu-page.component';
import { FavouriteFoodComponent } from './favourite-food/favourite-food.component';

export const routes: Routes = [
    {
        path:'signup',component:SignupComponent
    }
    ,
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent, canActivate: [authGuard] },
    {
        path:'',component:HomeComponent
    },{
        path:'restaurant/:id',component:RestMenuPageComponent
    },{
        path:'food',component:FoodPageComponent
    },{
        path:'favourite',component:FavouriteFoodComponent
    },{
        path:'login',component:LoginComponent
    }
];
