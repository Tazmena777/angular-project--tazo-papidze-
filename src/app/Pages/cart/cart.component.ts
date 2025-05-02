import { Component ,OnInit } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { RestaurantService } from '../../Services/restaurant.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../Models/product';

@Component({
  selector: 'app-cart',
  imports: [FooterComponent, RouterModule, FormsModule , CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(private httpRestaurant: RestaurantService){}

  cartItems: any[] = [];
  products : IProduct[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadProducts() {
    this.httpRestaurant.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data;
      }
    });
  }

  loadCart() {
    this.httpRestaurant.getBasketItems().subscribe({
      next: (data : any) => {
        this.cartItems = data;
        this.calculateTotal();
      }
    });
  }

  increase(item: any) {
    item.quantity += 1;
    this.updateCart(item);
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateCart(item);
    }
  }

  updateCart(item: any) {
    this.httpRestaurant.updateBasket(item).subscribe(() => {
      this.calculateTotal(); 
    });
  }

  deleteProduct(itemId: number) {
    this.httpRestaurant.deleteFromBasket(itemId).subscribe(() => {
      this.cartItems = this.cartItems.filter(p => p.id !== itemId);
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  

}

