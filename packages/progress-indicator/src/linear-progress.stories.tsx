import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinearProgress from './linear-progress';
import React from 'react';

const Template: ComponentStory<typeof LinearProgress> = (args) => <LinearProgress {...args} />;

export default {
  title: 'Components/Progress Indicator/Linear Progress',
  component: LinearProgress,
  decorators: [(Story) => <div style={{ width: '500px' }}>{Story()}</div>],
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'primary',
      description: 'The color of the component.',
      options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      table: {
        type: { summary: 'elementType' },
        defaultValue: { summary: 'primary' },
      },
    },
    value: {
      control: { min: 0, max: 100, step: 1, type: 'range' },
      description: 'The value of the progress indicator for the determinate variant.',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    valueBuffer: {
      control: { min: 0, max: 100, step: 1, type: 'range' },
      description: 'The value for the buffer variant.',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    variant: {
      control: 'radio',
      options: ['indeterminate', 'determinate', 'buffer', 'query'],
      defaultValue: 'indeterminate',
      description: 'The variant to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'indeterminate' },
      },
    },
  },
} as ComponentMeta<typeof LinearProgress>;

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: 'indeterminate',
};

export const Determinate = Template.bind({});
Determinate.args = {
  value: 50,
  variant: 'determinate',
};

export const Buffer = Template.bind({});
Buffer.args = {
  value: 50,
  valueBuffer: 10,
  variant: 'buffer',
};

export const Query = Template.bind({});
Query.args = {
  variant: 'query',
};
