import React from 'react';
import { TodoItem } from '../App';

export default {
  title: 'Example/TodoItem',
  component: TodoItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  index: 0,
  title: 'Sample Todo',
  description: 'This is a sample todo item',
  handleToDoDelete: () => console.log('Delete clicked'),
  handleComplete: () => console.log('Complete clicked'),
};

