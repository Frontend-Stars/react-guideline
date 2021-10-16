import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SubmitButton } from './SubmitButton';
import { SubmitButtonProps } from './types';

export default {
  title: 'Example/SubmitButton',
  component: SubmitButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const DefaultSubmitButton = Template.bind({});

DefaultSubmitButton.args = {
  size: 'buttonL textM',
};

export const AnotherSubmitButton = Template.bind({});

AnotherSubmitButton.args = {
  size: 'm',
};
/*
теперь мы сможем использовать компиляцию компонентов кнопка и текст и указывать размеры отдельно каждому или одним значением обоим для этого мы можем передавать размер использую значения
'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'
или целевые значения
'buttonXXL' | 'buttonXL' | 'buttonL' | 'buttonM' | 'buttonS' | 'buttonXS' - для управления размером кнопки
'textXXL' | 'textXL' | 'textL' | 'textM' | 'textS' | 'textXS' - для управления размером текста
пример передачи значения
<SubmitButton size="buttonM textS">Сохранить</SubmitButton>
<SubmitButton size="s">Сохранить</SubmitButton> === <SubmitButton size="buttonS textS">Сохранить</SubmitButton>
*/
