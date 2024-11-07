import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  orderItems: { itemName: string; price: number; restaurant: string }[] = [];
  totalPrice: number = 0;
  orderTime: string = new Date().toISOString(); // Current time in ISO format


  // addToCart(item: { itemName: string; price: number; restaurant: string }) {
  //   const cartItems = sessionStorage.getItem('cartItems');
  //   const items = cartItems ? JSON.parse(cartItems) : [];
  //   items.push(item);
  //   sessionStorage.setItem('cartItems', JSON.stringify(items));
  // }


  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadCart();
  }

  // Load cart data from session storage
  loadCart() {
    const cartData = sessionStorage.getItem('cartItems');
    if (cartData) {
      this.orderItems = JSON.parse(cartData);
      this.calculateTotalPrice();
    }
  }

  // Calculate total price based on items in the cart
  calculateTotalPrice() {
    this.totalPrice = this.orderItems.reduce((sum, item) => sum + item.price, 0);
  }

  // Method to remove an item from the cart
  removeItem(index: number) {
    this.orderItems.splice(index, 1); // Remove item from the array
    sessionStorage.setItem('cartItems', JSON.stringify(this.orderItems)); // Update session storage
    this.calculateTotalPrice(); // Recalculate total price
  }




  // Method to place an order
  placeOrder() {
    const order = {
      orderItems: this.orderItems,
      totalPrice: this.totalPrice,
      orderTime: this.orderTime,
    };

    this.orderService.createOrder(order).subscribe({
      next: (createdOrder) => {
        console.log('Order placed successfully', createdOrder);
        // Clear session storage or show success message
        sessionStorage.removeItem('cartItems');
        this.orderItems = []; // Clear cart in component
        this.totalPrice = 0; // Reset total price
      },
      error: (err) => {
        console.error('Error placing order', err);
      },
    });
    alert("Order Placed");
  }
}
