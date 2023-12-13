import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export const Default: StoryObj<ButtonComponent> = {
  name: 'Default/Primary Button',
  args: {
    label: 'Your Button label',
  },
};

export const Secondary: StoryObj<ButtonComponent> = {
  name: 'Secondary Button',
  args: {
    type: 'secondary',
    label: 'Your Secondary Button label',
  },
};

export const WithIcon: StoryObj<ButtonComponent> = {
  name: 'Icon Button',
  args: {
    type: 'primary',
    label: 'A button with an icon',
    icon: 'coffee',
  },
};

export default meta;
