import { ComponentMeta, ComponentStory } from '@storybook/react';
import Paper from './paper';
import React from 'react';

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export default {
  title: 'Components/Paper',
  component: Paper,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
    },
    component: {
      control: 'select',
      description:
        'The component used for the root node. Either a string to use a HTML element or a component.',
      options: ['aside', 'div', 'section', 'span'],
      table: {
        type: { summary: 'elementType' },
      },
    },
    elevation: {
      control: { min: 0, max: 24, step: 1, type: 'range' },
      description:
        'Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    square: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, rounded corners are disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'radio',
      options: ['elevation', 'outlined'],
      defaultValue: 'elevation',
      description: 'The variant to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'elevation' },
      },
    },
  },
} as ComponentMeta<typeof Paper>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Paper',
};
