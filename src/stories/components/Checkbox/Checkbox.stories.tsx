import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    defaultValue: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const ToonsCheckbox = Template.bind({});

ToonsCheckbox.args = {
  id: 'checkbox',
};
