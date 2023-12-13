import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { FormHelperService } from '../form-helper.service';

export type InputType = 'text' | 'password' | 'email';

/**
 * A simple input that can have click listeners and so on.
 *
 * Usage:
 *
 * ```html
 * <app-form-input type="text" />
 * ```
 *
 * @since 0.0.1
 * @author Christian Illies<c.illies@finatix.de>
 * @public
 * @package ui
 */
@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent {
  /**
   * Change the type of the input
   *
   * @since 0.0.1
   * @summary Type of the input
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input() type: InputType = 'text';
  /**
   * Placeholder of the input
   *
   * @since 0.0.3
   * @summary Placeholder when no value is provided
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input() placeholder: string = '';
  /**
   * value of the input
   *
   * @since 0.0.3
   * @summary value
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input() value: string | undefined;
  /**
   * Placeholder of the input
   *
   * @since 0.0.3
   * @summary Placeholder when no value is provided
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   * @internal
   */
  @Input() id: string = crypto.randomUUID();

  /**
   * @private
   */
  readonly #formHelper = inject(FormHelperService, { optional: true });

  onChange(value: string) {
    this.#formHelper?.update(this.type, value);
  }
}
