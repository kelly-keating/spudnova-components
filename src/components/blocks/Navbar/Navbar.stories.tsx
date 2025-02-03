/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavbarProps } from './Navbar.tsx';

export default {
  title: 'Blocks/Navbar',
  component: Navbar,
  argTypes: {
    leftItems: { control: 'string' },
    rightItems: { control: 'string' },
    bgColor: { control: 'text' },
    color: { control: 'text' },
    shadow: { control: 'boolean' },
  },
} as Meta<NavbarProps>;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

// Default Navbar
export const Default = Template.bind({});

// Navbar with left items
export const LeftItems = Template.bind({});
LeftItems.args = {
  left: 'Left Items',
};

export const LeftItemsComplex = Template.bind({});
LeftItemsComplex.args = {
  left: (
    <div>
      <span>Left Item 1</span>
      <span>Left Item 2</span>
    </div>
  ),
};

// Navbar with right items
export const RightItems = Template.bind({});
RightItems.args = {
  right: 'Right Items',
};

export const RightItemsComplex = Template.bind({});
RightItemsComplex.args = {
  right: (
    <div>
      <span>Right Item 1</span>
      <span>Right Item 2</span>
    </div>
  ),
};

// Navbar with left and right items
export const LeftAndRightItems = Template.bind({});
LeftAndRightItems.args = {
  left: 'Left Items',
  right: 'Right Items',
};

export const LeftAndRightItemsComplex = Template.bind({});
LeftAndRightItemsComplex.args = {
  left: (
    <div>
      <span>Left Item 1</span>
      <span>Left Item 2</span>
    </div>
  ),
  right: (
    <div>
      <span>Right Item 1</span>
      <span>Right Item 2</span>
    </div>
  ),
};

// Navbar with background color
export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  bgColor: 'blue',
};

// Navbar with text color
export const TextColor = Template.bind({});
TextColor.args = {
  color: 'red',
};

// Navbar with shadow
export const ShadowYes = Template.bind({});
ShadowYes.args = {
  shadow: true,
};

export const ShadowNo = Template.bind({});
ShadowNo.args = {
  shadow: false,
};

// Navbar with all props
export const FullNavbar = Template.bind({});
FullNavbar.args = {
  left: 'Left Items',
  right: 'Right Items',
  bgColor: 'lightblue',
  color: '#333',
  shadow: true,
};
