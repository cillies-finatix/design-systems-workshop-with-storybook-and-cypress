import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.css',
})
export class FormLayoutComponent {
  @Input() columns = 1;

  @HostBinding('style')
  get templateColumns() {
    return `grid-template-columns: repeat(${this.columns}, 1fr);`;
  }
}
