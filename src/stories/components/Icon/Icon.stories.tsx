import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      defaultValue: 'Alert',
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ToonsIcon = Template.bind({});
