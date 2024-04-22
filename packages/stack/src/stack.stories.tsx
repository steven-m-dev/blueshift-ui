import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@blueshift-ui/button';
import { Link } from '@blueshift-ui/link';
import React from 'react';
import Stack from './stack';

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export default {
  title: 'Components/Stack',
  component: Stack,
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
    direction: {
      control: 'select',
      options: ['column-reverse', 'column', 'row-reverse', 'row'],
      defaultValue: 'column',
      description: 'The variant to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'column' },
      },
    },
  },
} as ComponentMeta<typeof Stack>;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Button>Do a thing</Button>
      <Link>Do another thing</Link>
    </>
  ),
};
