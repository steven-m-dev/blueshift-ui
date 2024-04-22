import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from './box';
import React from 'react';

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export default {
  title: 'Components/Box',
  component: Box,
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
  },
} as ComponentMeta<typeof Box>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Box',
  component: 'aside',
};
