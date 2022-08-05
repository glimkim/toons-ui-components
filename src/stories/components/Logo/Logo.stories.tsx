import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    style: {
      defaultValue: 'BASIC',
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const ToonsLogo = Template.bind({});
