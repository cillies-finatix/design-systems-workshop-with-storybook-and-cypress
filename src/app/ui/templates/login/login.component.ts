import { Component, inject } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { FormLayoutComponent } from '../../form/form-layout/form-layout.component';
import { FormElementComponent } from '../../form/form-element/form-element.component';
import { ButtonComponent } from '../../button/button.component';
import { FormHelperService } from '../../form/form-helper.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardComponent,
    FormLayoutComponent,
    FormElementComponent,
    ButtonComponent,
  ],
  providers: [FormHelperService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly #formHelperService = inject(FormHelperService);

  onLoginClick() {
    console.log('login values', this.#formHelperService.values());
  }
}
