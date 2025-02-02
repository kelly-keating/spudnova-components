/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import VisuallyHidden, { VisuallyHiddenProps } from './VisuallyHidden.tsx';

export default {
  title: 'Elements/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'div', 'label'],
    },
  },
} as Meta<VisuallyHiddenProps>;

const Template: StoryFn<VisuallyHiddenProps> = (args) => (
  <VisuallyHidden {...args} />
);

// Default VisuallyHidden
export const Default = Template.bind({});
Default.args = {
  children: 'Hidden Text',
};

// Span Element
export const SpanElement = Template.bind({});
SpanElement.args = {
  children: 'Hidden Text',
  as: 'span',
};

// Div Element
export const DivElement = Template.bind({});
DivElement.args = {
  children: 'Hidden Text',
  as: 'div',
};

// Label Element
export const LabelElement = Template.bind({});
LabelElement.args = {
  children: 'Hidden Text',
  as: 'label',
};

// Complex Content
export const ComplexContent = Template.bind({});
ComplexContent.args = {
  children: (
    <button type="button">
      <span>Hidden Text</span>
    </button>
  ),
};
