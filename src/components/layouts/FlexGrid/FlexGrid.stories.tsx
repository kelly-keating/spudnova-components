/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import FlexGrid, { FlexGridProps } from './FlexGrid.tsx';

export default {
  title: 'Layouts/FlexGrid',
  component: FlexGrid,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta<FlexGridProps>;

const Template: StoryFn<FlexGridProps> = (args) => (
  <FlexGrid {...args}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
  </FlexGrid>
);

export const Default = Template.bind({});
Default.args = {};
