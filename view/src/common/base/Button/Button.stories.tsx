import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './types';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  children: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: 'Small Button',
};
