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
}
