import { ComponentMeta, ComponentStory } from '@storybook/react';
import BackToTopButton from '.';
import React from 'react';

const Template: ComponentStory<typeof BackToTopButton> = (args) => <BackToTopButton {...args} />;

export default {
  title: 'Components/Navigation/BackToTopButton',
  component: BackToTopButton,
  argTypes: {
    targetSelector: {
      description: 'The element selector to target.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div id="top">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BackToTopButton>;

export const Default = Template.bind({});
Default.args = {
  children: 'Back to top',
};

export const WithTargetSelector = Template.bind({});
WithTargetSelector.args = {
  children: 'Back to top',
  targetSelector: '#top',
};
