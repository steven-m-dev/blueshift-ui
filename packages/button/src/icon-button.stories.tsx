import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from './icon-button';

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <HomeIcon />
  </IconButton>
);

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      control: 'select',
      description: 'The color of the component. ',
      options: [
        'inherit',
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    edge: {
      control: 'select',
      description:
        'If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape).',
      options: ['start', 'end', false],
      table: {
        type: { summary: 'boolean|string' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the component. `small` is equivalent to the dense button styling.',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary IconButton',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary IconButton',
  color: 'secondary',
};
