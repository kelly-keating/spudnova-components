/* eslint-disable react/function-component-definition, react/jsx-props-no-spreading */
import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card.tsx';

export default {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    header: { control: 'text' },
    titleImg: { control: 'object' },
    content: { control: 'text' },
    footer: { control: 'text' },
  },
} as Meta<CardProps>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

// Default Card
export const Default = Template.bind({});
Default.args = {
  content: 'Card Content goes here',
};

// Card with Header
export const Header = Template.bind({});
Header.args = {
  header: 'Card Header',
  content: 'Card Content goes here',
};

// Card with Footer
export const Footer = Template.bind({});
Footer.args = {
  content: 'Card Content goes here',
  footer: 'Card Footer',
};

// Card with Title Image
export const TitleImage = Template.bind({});
TitleImage.args = {
  titleImg: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
  },
  content: 'Card Content goes here',
};

// Card with all props
export const FullCard = Template.bind({});
FullCard.args = {
  header: 'Card Header',
  titleImg: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
  },
  content: 'Card Content goes here',
  footer: 'Card Footer',
};

// Card with complex content
export const ComplexContent = Template.bind({});
ComplexContent.args = {
  header: (
    <div>
      <h1>Card Header</h1>
      <p>Card Subtitle</p>
    </div>
  ),
  titleImg: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
  },
  content: (
    <div>
      <h2>Card Content goes here</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
        fermentum turpis. Nullam sit amet eros ut odio ultricies vehicula.
        Curabitur auctor, libero in ultricies tincidunt, nunc justo posuere
        purus, eget ultricies odio nisl in libero.
      </p>
    </div>
  ),
  footer: (
    <div>
      <p>Card Footer</p>
      <button type="button">Click Me</button>
    </div>
  ),
};
