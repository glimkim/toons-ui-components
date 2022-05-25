import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    fullWidth: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    type: {
      control: {
        type: 'select',
      },
      defaultValue: 'text',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'input label',
    },
    errorText: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'placeholder',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ToonsInput = Template.bind({});

ToonsInput.args = {
  id: 'text-input',
};
