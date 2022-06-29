import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    isPartial: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    theme: {
      control: {
        type: 'select',
      },
      defaultValue: 'mix',
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const ToonsLoader = Template.bind({});

ToonsLoader.args = {};
