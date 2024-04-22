import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './button';
import React from 'react';

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary'] },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
  },
} as ComponentMeta<typeof Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  color: 'primary',
  variant: 'contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  color: 'secondary',
  variant: 'contained',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text Button',
  color: 'primary',
  variant: 'text',
};
