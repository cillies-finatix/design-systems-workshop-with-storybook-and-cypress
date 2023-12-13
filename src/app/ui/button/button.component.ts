import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { IconComponent } from '../icon/icon.component';

export type ButtonType = 'primary' | 'secondary';

/**
 * A simple button that can have click listeners and so on.
 *
 * Provide a label at least and an optional type for its appearance.
 *
 * Usage:
 *
 * ```html
 * <app-button label="My button" type="primary" />
 * ```
 *
 * Or with an icon
 *
 * ```html
 * <app-button icon="fingerprint" label="My button" type="primary" />
 * ```
 *
 * @since 0.0.1
 * @author Christian Illies<c.illies@finatix.de>
 * @public
 * @package ui
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Change the label of the button by passing the input "label" here.
   * This is mandatory to show a button anyway.
   * @required
   * @since 0.0.1
   * @summary Label of the button
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: true }) public label: string = 'Button Label';
  /**
   * Change the type of the button
   *
   * @since 0.0.1
   * @summary Type of the button
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: false }) type: ButtonType = 'primary';
  /**
   * Add icon to button (prefix)
   *
   * @since 0.0.2
   * @summary icon for the button
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: false }) icon: IconName | undefined;
}
