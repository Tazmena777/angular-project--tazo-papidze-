import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogService } from '../../Services/dialog.service';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(public dialogService : DialogService) {}
}
