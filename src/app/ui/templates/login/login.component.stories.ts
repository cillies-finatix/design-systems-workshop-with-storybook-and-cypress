import type { Meta, StoryObj } from '@storybook/angular';

import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  title: 'Components/Login',
  component: LoginComponent,
  argTypes: {},
};

export const Default: StoryObj<LoginComponent> = {
  name: 'Default',
  args: {},
};

export default meta;
