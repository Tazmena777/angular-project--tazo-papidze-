import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../Models/category';
import { IProduct } from '../Models/product';
import { Observable } from 'rxjs';
import { userBasket } from '../Models/basket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAll(url : string){
    return this.http.get(url)
  }

  getById(url : string, id : number){
    return this.http.get(`${url}/${id}`)
  }

  getFilteredProducts(
    vegeterian: boolean,
    nuts: boolean,
    spiciness: number,
    categoryId: number | null
  ) {
    const url = `https://restaurant.stepprojects.ge/api/Products/GetFiltered`;
    if(categoryId == 0){
      const params = `?vegeterian=${vegeterian}&nuts=${nuts}&spiciness=${spiciness}`;
      return this.http.get(url + params);
    }
    else{
      const params = `?vegeterian=${vegeterian}&nuts=${nuts}&spiciness=${spiciness}&categoryId=${categoryId}`;
      return this.http.get(url + params);
    }
  }  

  postBasket(url : string, object : any){
    return this.http.post(url, object)
  }

  updateBasket(object: userBasket) {
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", object);
  }
  
  deleteFromBasket(id: number) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`);
  }
  
  getBasketItems() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll");
  }
}
