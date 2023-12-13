import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.css',
})
export class FormLayoutComponent {
  @Input() columns = 1;
  @Input() heading: string | undefined;

  get templateColumns() {
    return `repeat(${this.columns}, 1fr)`;
  }
}
