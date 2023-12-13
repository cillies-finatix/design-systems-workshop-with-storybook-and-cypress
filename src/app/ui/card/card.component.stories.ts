import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  render: (args: CardComponent) => ({
    props: { ...args },
    template: `
    <app-card>
        <h1>Header</h1>
        <p>Lorem ipsum</p>
    </app-card>
    `,
  }),
};

export const Default: StoryObj<CardComponent> = {
  name: 'Default',
  args: {},
};

export default meta;
