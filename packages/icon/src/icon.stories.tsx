import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Home, Icon } from './';
import React from 'react';

const MaterialTemplate: ComponentStory<typeof Home> = (args) => <Home {...args} />;
const CustomTemplate: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        disable: true,
        type: { summary: 'node' },
      },
    },
    color: {
      control: 'select',
      defaultValue: 'inherit',
      description: 'The color of the component. ',
      options: [
        'inherit',
        'action',
        'disabled',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
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
    fontSize: {
      control: 'select',
      description: 'The fontSize applied to the icon. Size values are determined by theme config.',
      defaultValue: 'medium',
      options: ['inherit', 'large', 'medium', 'small'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    htmlColor: {
      control: 'color',
      description: 'Applies a color attribute to the SVG element.',
      table: {
        disable: true,
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Material = MaterialTemplate.bind({});

export const Custom = CustomTemplate.bind({});
Custom.args = {
  children: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  color: 'info',
  fontSize: 'large',
};
