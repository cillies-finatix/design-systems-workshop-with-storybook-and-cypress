import type { Meta, StoryObj } from '@storybook/angular';

import { FormElementComponent } from './form-element.component';
import * as InputStories from '../input/input.component.stories';

const meta: Meta<FormElementComponent> = {
  title: 'UI/Form/Element',
  component: FormElementComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export const Default: StoryObj<FormElementComponent> = {
  name: 'Default/Primary Input',
  args: {
    ...InputStories.Default.args,
    label: 'Straße und Hausnummer angeben',
  },
};

export const Email: StoryObj<FormElementComponent> = {
  name: 'Email Input',
  args: {
    ...InputStories.Email.args,
    label: 'E-Mail Adresse eintragen',
  },
};

export const Password: StoryObj<FormElementComponent> = {
  name: 'Password Input',
  args: {
    ...InputStories.Password.args,
    label: 'Passwort eingeben',
  },
};

export default meta;
