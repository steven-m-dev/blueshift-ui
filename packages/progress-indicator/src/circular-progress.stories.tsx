import { ComponentMeta, ComponentStory } from '@storybook/react';
import CircularProgress from './circular-progress';
import React from 'react';

const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export default {
  title: 'Components/Progress Indicator/Circular Progress',
  component: CircularProgress,
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
    diableShrink: {
      control: 'boolean',
      defaultValue: false,
      description:
        'If true, the shrink animation is disabled. This only works if variant is indeterminate.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: { min: 0, step: 1, type: 'number' },
      description:
        "The size of the component. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.",
      defaultValue: 40,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 40 },
      },
    },
    thickness: {
      control: { min: 0, step: 0.1, type: 'number' },
      description: 'The thickness of the circle.',
      defaultValue: 3.6,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3.6 },
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
    variant: {
      control: 'radio',
      options: ['indeterminate', 'determinate'],
      defaultValue: 'indeterminate',
      description: 'The variant to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'indeterminate' },
      },
    },
  },
} as ComponentMeta<typeof CircularProgress>;

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: 'indeterminate',
};

export const Determinate = Template.bind({});
Determinate.args = {
  value: 50,
  variant: 'determinate',
};
