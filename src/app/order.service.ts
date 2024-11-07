import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface OrderItem {
  itemName: string;
  price: number;
  restaurant: string;
}

interface Order {
  id?: string; // Optional because it may not be returned on creation
  orderItems: OrderItem[]; // Array of items in the order, each with its restaurant
  totalPrice: number;
  orderTime: string; // ISO date string
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://672854df270bd0b975550858.mockapi.io/api/v1/login/orders'; // Replace with your MockAPI URL

  constructor(private http: HttpClient) {}

  // Method to create an order
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }
}
