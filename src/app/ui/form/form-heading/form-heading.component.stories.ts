import { Meta, StoryObj } from '@storybook/angular';
import { FormHeadingComponent } from './form-heading.component';

const meta: Meta<FormHeadingComponent> = {
  title: 'UI/Form/Heading',
  component: FormHeadingComponent,
  argTypes: {
    label: { control: 'text' },
  },
};

export const Default: StoryObj<FormHeadingComponent> = {
  name: 'Default',
  args: {
    label: 'Login Form',
  },
};

export default meta;
