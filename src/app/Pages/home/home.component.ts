import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { ICategory } from '../../Models/category';
import { IProduct } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../Services/restaurant.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private httpRestaurant: RestaurantService) { }

  categories: ICategory[] = [];
  products: IProduct[] = [];
  selectedCategoryId: number | null = null;

  ngOnInit(): void {
    this.loadCategories();
    this.loadAllProducts(); 
  }

  loadCategories() {
    this.httpRestaurant.getAllCategories().subscribe((data : any) => this.categories = data);
  }

  loadAllProducts() {
    this.httpRestaurant.getAllProducts().subscribe((data : any) => this.products = data);
  }

  loadProductsByCategory(id: number) {
    this.httpRestaurant.getCategoriesById(id)
      .subscribe(category => {
        this.products = category.products;
        this.selectedCategoryId = id;
      });
  }

  showAll() {
    this.selectedCategoryId = null;
    this.loadAllProducts();
  }


}