import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SectionBar from './SectionBar';

export default {
  title: 'Components/SectionBar',
  component: SectionBar,
} as ComponentMeta<typeof SectionBar>;

const Template: ComponentStory<typeof SectionBar> = (args) => <SectionBar {...args} />;

export const ToonsSectionBar = Template.bind({});

ToonsSectionBar.args = {
  isActive: true,
  platform: 'NAVER',
};
