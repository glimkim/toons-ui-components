import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from './ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = ({ name, ...args }) => <ListItem name={name} {...args} />;

export const ToonsListItem = Template.bind({});

ToonsListItem.args = {
  name: 'NAME',
  day: 'FRIDAY',
  onToggleItem: (isActive, handleToggleView) => {
    handleToggleView();
  },
};

/* export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
}; */
