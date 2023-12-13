import type { Meta, StoryObj } from '@storybook/angular';

import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'UI/Form/Input',
  component: InputComponent,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export const Default: StoryObj<InputComponent> = {
  name: 'Default/Primary Input',
  args: {
    placeholder: 'Straße und Hausnummer',
  },
};

export const Email: StoryObj<InputComponent> = {
  name: 'Email Input',
  args: {
    type: 'email',
    placeholder: 'E-Mail Adresse',
  },
};

export const Password: StoryObj<InputComponent> = {
  name: 'Password Input',
  args: {
    type: 'password',
    placeholder: 'Passwort',
  },
};

export default meta;
