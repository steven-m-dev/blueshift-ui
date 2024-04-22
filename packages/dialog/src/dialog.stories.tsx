import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@blueshift-ui/button';
import Dialog from './dialog';
import { useState } from 'react';

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Open Dialog
      </Button>

      <Dialog {...args} onClose={() => setOpen(false)} open={open} />
    </>
  );
};

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    maxWidth: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    withCloseButton: {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  title: 'Primary Dialog',
};

export const MaxWidthDialog = Template.bind({});
MaxWidthDialog.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  title: 'Max Width Dialog',
  fullWidth: true,
  maxWidth: 'lg',
};

export const WithActionButtons = Template.bind({});
WithActionButtons.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  title: 'With Action Buttons',
  actions: [<Button key="disagree">Disagree</Button>, <Button key="agree">Agree</Button>],
  fullWidth: true,
  maxWidth: 'lg',
};
