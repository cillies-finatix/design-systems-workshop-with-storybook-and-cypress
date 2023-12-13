import type { Meta, StoryObj } from '@storybook/angular';

import { FormInputComponent } from './form-input.component';

const meta: Meta<FormInputComponent> = {
  title: 'UI/Form/Input',
  component: FormInputComponent,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export const Default: StoryObj<FormInputComponent> = {
  name: 'Default/Primary Input',
  args: {
    placeholder: 'Straße und Hausnummer',
  },
};

export const Email: StoryObj<FormInputComponent> = {
  name: 'Email Input',
  args: {
    type: 'email',
    placeholder: 'E-Mail Adresse',
  },
};

export const Password: StoryObj<FormInputComponent> = {
  name: 'Password Input',
  args: {
    type: 'password',
    placeholder: 'Passwort',
  },
};

export default meta;
