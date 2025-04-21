import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { ICategory } from '../../Models/category';
import { IProduct } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../Services/restaurant.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  



}