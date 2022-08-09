import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabBar from './TabBar';

export default {
  title: 'Components/TabBar',
  component: TabBar,
  argTypes: {},
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const ToonsTabBar = Template.bind({});

ToonsTabBar.args = {
  tabs: [
    {
      title: 'ALL',
      contents: <div>'contents here'</div>,
    },
    {
      title: 'NAVER',
      contents: <div>'contents here'</div>,
    },
    {
      title: 'KAKAO',
      contents: <div>'contents here'</div>,
    },
  ],
};
