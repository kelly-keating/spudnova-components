/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'danger', 'success'],
    },
    disabled: { control: 'boolean' },
    submit: { control: 'boolean' },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Default Button
export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};

// Variants
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  onClick: () => {},
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  variant: 'ghost',
  onClick: () => {},
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
  onClick: () => {},
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Button',
  variant: 'success',
  onClick: () => {},
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  onClick: () => {},
};

// Submit Button
export const Submit = Template.bind({});
Submit.args = {
  children: 'Submit Button',
  submit: true,
  onClick: () => {},
};
