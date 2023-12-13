import { FormLayoutComponent } from './form-layout.component';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormElementComponent } from '../form-element/form-element.component';
import { InputType } from '../form-input/form-input.component';
import { FormHeadingComponent } from '../form-heading/form-heading.component';

type CustomProperties = {
  HeadingLabel: string;
  FirstInputLabel: string;
  FirstInputType: InputType;
  SecondInputLabel: string;
  SecondInputType: InputType;
};
type FormLayoutComponentExtendedType = FormLayoutComponent & CustomProperties;

const meta: Meta<FormLayoutComponentExtendedType> = {
  title: 'UI/Form/Layout',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormLayoutComponent,
        FormElementComponent,
        FormHeadingComponent,
      ],
    }),
  ],
  args: {
    HeadingLabel: 'Login Form',
    FirstInputLabel: 'E-Mail Adresse:',
    FirstInputType: 'email',
    SecondInputLabel: 'Passwort:',
    SecondInputType: 'password',
    columns: 2,
  },
  render: (args: FormLayoutComponentExtendedType) => ({
    props: { ...args },
    template: `
    <app-form-layout [columns]="${args.columns}">
        <app-form-heading label="${args.HeadingLabel}" />
        <app-form-element type="${args.FirstInputType}" label="${args.FirstInputLabel}" />
        <app-form-element type="${args.SecondInputType}" label="${args.SecondInputLabel}" />
    </app-form-layout>
    `,
  }),
};

export const Default: StoryObj<FormLayoutComponent> = {
  args: {},
};

export default meta;
