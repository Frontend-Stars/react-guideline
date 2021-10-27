import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text } from './Text';
import { TextProps } from './types';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  inline: true,
  children: 'Large Inline Text',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: 'Small Text',
};
