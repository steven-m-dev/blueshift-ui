import { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from './accordion';

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
    },
    defaultExpanded: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, expands the accordion by default.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, the component is disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disableGutters: {
      control: 'boolean',
      defaultValue: false,
      description:
        'If true, it removes the margin between two expanded accordion items and the increase of height.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
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
    expanded: {
      control: 'boolean',
      description:
        'If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'Callback fired when the expand/collapse state is changed.',
      table: {
        type: { summary: 'function' },
      },
    },
    square: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, rounded corners are disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    title: {
      description: 'The title of the component.',
      table: {
        type: { summary: 'node' },
      },
    },
    variant: {
      control: 'radio',
      defaultValue: 'elevation',
      description: 'The variant to use.',
      table: {
        defaultValue: { summary: 'elevation' },
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <ul>
      <li>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </li>
      <li>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </li>
    </ul>
  ),
  defaultExpanded: true,
  title: 'Primary Accordion',
};
