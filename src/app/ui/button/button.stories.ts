import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
};

export const Default: StoryObj<ButtonComponent> = {
  args: {
    type: 'primary',
    label: 'Your Button label'
  },
};

export default meta;
