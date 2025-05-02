import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
constructor(private rou : Router){}

errorImg = "erorr_page.png"
}
