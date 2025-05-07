import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { ICategory } from '../../Models/category';
import { IProduct } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../Services/restaurant.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DialogService } from '../../Services/dialog.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private httpRestaurant: RestaurantService , private http : HttpClient , private dialogService: DialogService) { }

  categories: ICategory[] = [];
  products: IProduct[] = [];
  selectedCategoryId: number | null = null;

  filter = {
    vegeterian: false,
    nuts: false,
    spiciness: 0,
    categoryId: 0
  };

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
      .subscribe((category : any)=> {
        this.products = category.products;
        this.selectedCategoryId = id;
      });
  }

  showAll() {
    this.selectedCategoryId = null;
    this.loadAllProducts();
  }


  applyFilter() {
    this.httpRestaurant.getProductsByFilter(
      this.filter.vegeterian,
      this.filter.nuts,
      this.filter.spiciness,
      this.filter.categoryId
    ).subscribe((data: any) => {
      this.products = data;
    });
  }
 
 
  resetFilter() {
    this.filter = {
      vegeterian: false,
      nuts: false,
      spiciness: 0,
      categoryId: 0
    };
    this.loadAllProducts();
  }


  addToCart(product: any) {
    this.httpRestaurant.addToBasket(product).subscribe(() => {
      this.dialogService.show('პროდუქტი დაემატა კალათაში!');
    });
  }

  
}