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

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`https://restaurant.stepprojects.ge/api/Categories/GetAll`);
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://restaurant.stepprojects.ge/api/Products/GetAll`);
  }

  getCategoryById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/{id}`);
  }
  
}
