import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Typography from './typography';

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    align: {
      control: 'select',
      defaultValue: 'inherit',
      description: 'Set the text-align on the component.',
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      table: {
        defaultValue: { summary: 'inherit' },
        type: { summary: 'string' },
      },
    },
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
    gutterBottom: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, the text will have a bottom margin.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    noWrap: {
      control: 'boolean',
      defaultValue: false,
      description:
        'If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    paragraph: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, the element will be a paragraph element',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    variant: {
      control: 'select',
      defaultValue: 'body1',
      description: 'Applies the theme typography styles.',
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
        'string',
      ],
      table: {
        defaultValue: { summary: 'body1' },
        type: { summary: 'elementType' },
      },
    },
    variantMapping: {
      description:
        'The component maps the variant prop to a range of different HTML element types. For instance, subtitle1 to `<h6>`. If you wish to change that mapping, you can provide your own. Alternatively, you can use the component prop.',
      table: {
        defaultValue: {
          summary:
            "{ h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p', inherit: 'p', }",
        },
        type: { summary: 'object' },
      },
    },
  },
} as ComponentMeta<typeof Typography>;

export const BodyOne = Template.bind({});
BodyOne.args = {
  children: 'Body 1 Text',
  variant: 'body1',
};

export const BodyTwo = Template.bind({});
BodyTwo.args = {
  children: 'Body 2 Text',
  variant: 'body2',
};

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  children: 'Large Display Text',
  variant: 'h1',
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  children: 'Medium Display Text',
  variant: 'h2',
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  children: 'Small Display Text',
  variant: 'h3',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Caption Text',
  variant: 'caption',
};

export const HeadlineLarge = Template.bind({});
HeadlineLarge.args = {
  children: 'Large Headline Text',
  variant: 'h4',
};

export const HeadlineMedium = Template.bind({});
HeadlineMedium.args = {
  children: 'Medium Headline Text',
  variant: 'h5',
};

export const HeadlineSmall = Template.bind({});
HeadlineSmall.args = {
  children: 'Small Headline Text',
  variant: 'h6',
};

export const Overline = Template.bind({});
Overline.args = {
  children: 'Overline Text',
  variant: 'overline',
};

export const SubtitleOne = Template.bind({});
SubtitleOne.args = {
  children: 'Subtitle 1 Text',
  variant: 'subtitle1',
};

export const SubtitleTwo = Template.bind({});
SubtitleTwo.args = {
  children: 'Subtitle 2 Text',
  variant: 'subtitle2',
};
