import {Component, Input} from '@angular/core';

export type InputType= 'primary'|'secondary';

/**
 * A simple input that can have click listeners and so on.
 *
 * Provide a label at least and an optional type for its appearance.
 *
 * Usage:
 *
 * ```html
 * <app-input label="My input" type="primary" />
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
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  /**
   * Change the label of the input by passing the input "label" here.
   * This is mandatory to show a input anyway.
   * @required
   * @since 0.0.1
   * @summary Label of the input
   * @author Christian Illies<c.illies@finatix.de>
   * @public
   * @package ui
   * @property
   * @type string
   */
  @Input({required: true}) public label: string = 'Input Label';
  /**
   * Change the type of the input
   *
   * @since 0.0.1
   * @summary Type of the input
   * @author Christian Illies<c.illies@finatix.de>
   * @public
   * @package ui
   * @property
   * @type string
   */
  @Input({required: false}) type: InputType = 'primary';
}
