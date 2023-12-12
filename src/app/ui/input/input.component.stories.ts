import type { Meta, StoryObj } from '@storybook/angular';

import {InputComponent, InputType} from './input.component';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
};

export const Default: StoryObj<InputComponent> = {
  name: 'Default/Primary Input',
  args: {
    label: 'Your Input label',
  },
};

export const Secondary: StoryObj<InputComponent> = {
  name: 'Secondary Input',
  args: {
    type: 'secondary',
    label: 'Your Secondary Input label',
  },
};

export default meta;
