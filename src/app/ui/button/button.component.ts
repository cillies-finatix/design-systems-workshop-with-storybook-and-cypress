import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * Change the label of the button by passing the input "label" here.
   * This is mandatory to show a button anyway.
   * @required
   * @since 0.0.1
   * @summary Label of the button
   * @author Chistian Illies<c.illies@finatix.de>
   * @public
   * @package ui
   * @property
   * @type string
   */
  @Input({required: true}) public label: string = 'Button Label';
  /**
   * Change the type of the button
   *
   * @since 0.0.1
   * @summary Type of the button
   * @author Chistian Illies<c.illies@finatix.de>
   * @public
   * @package ui
   * @property
   * @type string
   */
  @Input({required: false}) type: 'primary' | 'secondary' = 'primary';
}
