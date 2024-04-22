import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppBar from './app-bar';
import React from 'react';

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text or components...',
};
