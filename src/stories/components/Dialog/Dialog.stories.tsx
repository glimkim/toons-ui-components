import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    children: {
      control: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const ToonsDialog = Template.bind({});

ToonsDialog.args = {
  children: <div style={{ backgroundColor: '#ededed', padding: '2rem' }}>hello</div>,
};
