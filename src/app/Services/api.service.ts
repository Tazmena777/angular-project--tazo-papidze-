import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../Models/category';
import { IProduct } from '../Models/product';
import { Observable } from 'rxjs';

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
    categoryId: number
  ) {
    const url = `https://restaurant.stepprojects.ge/api/Products/GetFiltered`;
    const params = `?vegeterian=${vegeterian}&nuts=${nuts}&spiciness=${spiciness}&categoryId=${categoryId}`;
    return this.http.get(url + params);
  }
}
