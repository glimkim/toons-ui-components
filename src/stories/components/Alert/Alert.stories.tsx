import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    isPartial: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const ToonsAlert = Template.bind({});

ToonsAlert.args = {};
