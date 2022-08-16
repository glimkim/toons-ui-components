import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './List';
import ListItem from '../ListItem/ListItem';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = ({ children, ...args }) => <List {...args}>{children}</List>;

export const ToonsList = Template.bind({});

const getListItems = () => {
  const numList = [];
  for (let i = 1; i <= 15; i++) {
    numList.push(i);
  }
  return numList.map((_num) => (
    <ListItem
      key={_num}
      itemInfo={{
        name: `NAME${_num}`,
        dayOfWeek: 'FRIDAY',
        thumbnail: '',
        link: '',
        toNotify: false,
        platform: 'NAVER',
      }}
      onToggleItem={(isActive, handleToggleView) => {
        handleToggleView();
      }}
    />
  ));
};

ToonsList.args = {
  children: <>{getListItems()}</>,
};
