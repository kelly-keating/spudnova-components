/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import Table, { TableProps } from './Table.tsx';

export default {
  title: 'Blocks/Table',
  component: Table,
  argTypes: {
    label: { control: 'text' },
    headers: { control: 'object' },
    data: { control: 'object' },
    hideLabel: { control: 'boolean' },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} as Meta<TableProps>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

// Default Table
export const Default = Template.bind({});
Default.args = {
  label: 'Table Label',
  headers: [],
  data: [],
};

// Simple Table
export const Simple = Template.bind({});
Simple.args = {
  label: 'Simple Table',
  headers: ['Name', 'Age'],
  data: [
    ['John Doe', 73],
    ['Jane Doe', 81],
  ],
};

// Complex Table
export const Complex = Template.bind({});
Complex.args = {
  label: 'Complex Table',
  headers: ['Name', 'Age', 'Favourite Code', 'Contact'],
  data: [
    [
      'John Doe',
      73,
      <code key="john-code">const greeting = &quot;Hello World!&quot;;</code>,
      <button key="john-button" type="button">
        Contact John
      </button>,
    ],
    [
      'Jane Doe',
      81,
      <code key="jane-code">console.log(&quot;Hello World!&quot;);</code>,
      <button key="jane-button" type="button">
        Contact Jane
      </button>,
    ],
  ],
};

// Table label
export const NoLabel = Template.bind({});
NoLabel.args = {
  label: 'Hidden Table Label',
  headers: ['Name', 'Age'],
  data: [
    ['John Doe', 73],
    ['Jane Doe', 81],
  ],
  hideLabel: true,
};
export const YesLabel = Template.bind({});
YesLabel.args = {
  label: 'Visible Table Label',
  headers: ['Name', 'Age'],
  data: [
    ['John Doe', 73],
    ['Jane Doe', 81],
  ],
  hideLabel: false,
};

// Horizontal Table
export const Horizontal = Template.bind({});
Horizontal.args = {
  label: 'Horizontal Table',
  headers: ['Name', 'Age'],
  data: [
    ['John Doe', 73],
    ['Jane Doe', 81],
  ],
  direction: 'horizontal',
};

// Vertical Table
export const Vertical = Template.bind({});
Vertical.args = {
  label: 'Vertical Table',
  headers: ['Name', 'Age'],
  data: [
    ['John Doe', 73],
    ['Jane Doe', 81],
  ],
  direction: 'vertical',
};
