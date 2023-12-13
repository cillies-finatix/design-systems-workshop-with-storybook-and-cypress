import type { Meta, StoryObj } from '@storybook/angular';

import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
};

export const Default: StoryObj<InputComponent> = {
  name: 'Default/Primary Input',
  args: {},
};

export const Email: StoryObj<InputComponent> = {
  name: 'Email Input',
  args: {
    type: 'email',
  },
};

export const Password: StoryObj<InputComponent> = {
  name: 'Password Input',
  args: {
    type: 'password',
  },
};

export default meta;
