import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './link';
import React from 'react';

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
    },
    color: {
      control: 'select',
      defaultValue: 'primary',
      description: 'The color of the link.',
      options: ['inherit', 'primary', 'secondary', 'error'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
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
    underline: {
      control: 'select',
      defaultValue: 'always',
      description: 'Controls when the link should have an underline.',
      options: ['always', 'hover', 'none'],
      table: {
        disable: true,
        type: { summary: 'string' },
        defaultValue: { summary: 'always' },
      },
    },
    variant: {
      control: 'select',
      defaultValue: 'inherit',
      description: 'Applies the theme typography styles.',
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
      },
    },
  },
} as ComponentMeta<typeof Link>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Link',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Link',
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Link',
  color: 'error',
};
