import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './card';
import { Link } from '@blueshift-ui/link';

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    action: {
      description: 'The action of the component.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    actionDetails: {
      description: 'The details of the action',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the card is in a loading state.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
      },
    },
    overline: {
      description: 'The overline of the component.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    thumbnail: {
      description: 'The image source of the component.',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      description: 'The title of the component.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const Primary = Template.bind({});
Primary.args = {
  action: <Link color="secondary">Register</Link>,
  actionDetails: 'Mon, June 15 @ 3:00 PM EST',
  overline: 'Live Event',
  thumbnail: 'contemplative-reptile.jpg',
  title: 'Drawn Together: with Audrey Hopkins',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
