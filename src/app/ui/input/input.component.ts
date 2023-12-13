import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

export type InputType = 'text' | 'password' | 'email';

/**
 * A simple input that can have click listeners and so on.
 *
 * Usage:
 *
 * ```html
 * <app-input type="text" />
 * ```
 *
 * @since 0.0.1
 * @author Christian Illies<c.illies@finatix.de>
 * @public
 * @package ui
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  /**
   * Change the type of the input
   *
   * @since 0.0.1
   * @summary Type of the input
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: false }) type: InputType = 'text';

  /**
   * Placeholder of the input
   *
   * @since 0.0.3
   * @summary Placeholder when no value is provided
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: false }) placeholder: string = '';
}
