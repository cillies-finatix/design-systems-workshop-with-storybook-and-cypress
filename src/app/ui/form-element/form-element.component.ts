import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { InputComponent, InputType } from '../input/input.component';

@Component({
  selector: 'app-form-element',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormElementComponent {
  /**
   * label of the input
   *
   * @since 0.0.3
   * @summary label
   * @author Christian Illies<c.illies@finatix.de>
   * @package ui
   */
  @Input({ required: true }) label: string = '';
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

  protected id: string = crypto.randomUUID();

  @HostBinding('class') get classNames() {
    return this.type;
  }
}
