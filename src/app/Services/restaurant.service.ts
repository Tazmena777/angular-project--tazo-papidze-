import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private api : ApiService) { }

  getAllCategories(){
    return this.api.getAll("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getCategoriesById(id : number){
    return this.api.getById("https://restaurant.stepprojects.ge/api/Categories/GetCategory", id)
  }

  getAllProducts(){
    return this.api.getAll("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getProductsByFilter(
    vegeterian: boolean,
    nuts: boolean,
    spiciness: number,
    categoryId: number
  ) {
    return this.api.getFilteredProducts(vegeterian, nuts, spiciness, categoryId);
  }
  
  

}
