import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-heading',
  standalone: true,
  imports: [],
  templateUrl: './form-heading.component.html',
  styleUrl: './form-heading.component.css',
})
export class FormHeadingComponent {
  @Input({ required: true }) label: string = '';
}
