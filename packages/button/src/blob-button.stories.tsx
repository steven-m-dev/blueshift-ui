import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlobButton from './blob-button';
import PlayCircleIcon from '@mui/icons-material/PlayCircleOutline';

const Template: ComponentStory<typeof BlobButton> = (args) => (
  <BlobButton {...args} icon={<PlayCircleIcon />} />
);

export default {
  title: 'Components/Button/BlobButton',
  component: BlobButton,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the component.',
      options: ['small', 'medium'],
    },
    orientation: {
      control: 'select',
      description: 'The orientation of the button.',
      options: ['horizontal', 'stacked'],
    },
  },
} as ComponentMeta<typeof BlobButton>;

export const Horizontal = Template.bind({});
Horizontal.args = {
  children: 'Blob Button',
  orientation: 'horizontal',
};

export const Stacked = Template.bind({});
Stacked.args = {
  children: 'Blob Button',
  orientation: 'stacked',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Blob Button',
  size: 'small',
};
