import {ChangeDetectionStrategy, Component, inject, Input,} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule,} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far, IconName} from '@fortawesome/free-regular-svg-icons';

/**
 * A simple icon of [Fontawesome Library (free)](https://fontawesome.com/search?o=r&m=free&f=classic)
 *
 * Usage:
 *
 * ```html
 * <app-icon iconName="fingerprint" />
 * ```
 *
 * @since 0.0.2
 * @author Christian Illies<c.illies@finatix.de>
 * @public
 * @package ui
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  /**
   * the icon name in font-awesome you want to use.
   *
   * Samples: fingerprint, coffee, arrow-right, ...
   *
   * [Fontawesome Library (free)](https://fontawesome.com/search?o=r&m=free&f=classic)
   */
  @Input({ required: true }) iconName: IconName = 'fingerprint';

  constructor() {
    inject(FaIconLibrary).addIconPacks(fas, far);
  }
}
