import { ComponentMeta, ComponentStory } from '@storybook/react';
import AsyncActionButton from './async-action-button';

const Template: ComponentStory<typeof AsyncActionButton> = (args) => (
  <AsyncActionButton {...args} />
);

export default {
  title: 'Components/Button/AsyncActionButton',
  component: AsyncActionButton,
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
  },
} as ComponentMeta<typeof AsyncActionButton>;

export const Success = Template.bind({});
Success.args = {
  children: 'Async Action Button',
  action: () => new Promise((resolve, reject) => setTimeout(() => resolve(), 3000)),
};

export const Error = Template.bind({});
Error.args = {
  children: 'Async Action Button',
  action: () => new Promise((resolve, reject) => setTimeout(() => reject(), 3000)),
};
