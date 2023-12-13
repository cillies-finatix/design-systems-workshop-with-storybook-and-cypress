import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far, IconName } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  /**
   * the icon name in font-awesome you want to use.
   */
  @Input({ required: true }) iconName: IconName = 'fingerprint';

  constructor() {
    inject(FaIconLibrary).addIconPacks(fas, far, fab);
  }
}
