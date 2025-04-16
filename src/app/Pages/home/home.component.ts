import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { ICategory } from '../../Models/category';
import { IProduct } from '../../Models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categories: ICategory[] = [];
  allProducts: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  activeCategoryId: number | null = null;

  constructor(private api : ApiService) {}


  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.api.getAllCategories().subscribe((data: ICategory[]) => {
      this.categories = data;
    });
  }

  loadProducts(): void {
    this.api.getAllProducts().subscribe((data: IProduct[]) => {
      this.allProducts = data;
      this.filteredProducts = data;
    });
  }

  selectCategory(categoryId: number | null): void {
    this.activeCategoryId = categoryId;
    this.filteredProducts = categoryId === null
      ? this.allProducts
      : this.allProducts.filter(product => product.categoryId === categoryId);
  }


}
