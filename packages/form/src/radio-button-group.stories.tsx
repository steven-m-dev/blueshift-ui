import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButtonGroup from './radio-button-group';
import React from 'react';

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => <RadioButtonGroup {...args} />;

export default {
  title: 'Components/Form/Radio Button Group',
  component: RadioButtonGroup,
  argTypes: {
    defaultValue: {
      description: 'The default value.',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      description: 'The form label.',
      table: {
        type: { summary: 'node' },
      },
    },
    inputOptions: {
      description: 'The input options.',
      table: {
        type: { summary: 'array' },
      },
    },
  },
} as ComponentMeta<typeof RadioButtonGroup>;

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'dogs',
  label: 'Pets',
  inputOptions: [
    {
      label: 'Dogs',
      value: 'dogs',
    },
    {
      label: 'Cats',
      value: 'cats',
    },
    {
      label: 'Birds',
      value: 'birds',
    },
  ],
};
