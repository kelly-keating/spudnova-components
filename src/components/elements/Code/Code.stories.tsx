/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import Code, { CodeProps } from './Code.tsx';

export default {
  title: 'Elements/Code',
  component: Code,
  argTypes: {
    codeLines: { control: 'object' },
  },
} as Meta<CodeProps>;

const Template: StoryFn<CodeProps> = (args) => <Code {...args} />;

// Default Code
export const Default = Template.bind({});

// Code with codeLines
export const CodeLines = Template.bind({});
CodeLines.args = {
  codeLines: ['const greeting = "Hello World!";', 'console.log(greeting);'],
};

// Code with children
export const Children = Template.bind({});
Children.args = {
  children: 'const str = "Hello World!";',
};

// Code with children and codeLines
export const ChildrenAndCodeLines = Template.bind({});
ChildrenAndCodeLines.args = {
  children: 'const str = "Hello World!";',
  codeLines: ['const greeting = "Hello World!";', 'console.log(greeting);'],
};
