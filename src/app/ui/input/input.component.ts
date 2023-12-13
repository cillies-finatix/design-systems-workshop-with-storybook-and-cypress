import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { IconComponent } from '../icon/icon.component';

export type InputType = 'primary' | 'secondary';

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
  imports: [IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  /**
   * Change the label of the input by passing the input "label" here.
   * This is mandatory to show a input anyway.
   * @required
   * @since 0.0.1
   * @summary Label of the input
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: true }) public label: string = 'Input Label';
  /**
   * Change the type of the input
   *
   * @since 0.0.1
   * @summary Type of the input
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: false }) type: InputType = 'primary';
  /**
   * Add an icon if needed
   *
   * @since 0.0.2
   * @summary icon for the input
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: false }) icon: IconName | undefined;

  protected internalRefId = crypto.randomUUID();
}
