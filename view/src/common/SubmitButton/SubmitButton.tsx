import { SubmitButtonProps } from '@common/SubmitButton/types';
import { Button } from '@common/base/Button/Button';
import { Text } from '@common/base/Text/Text';
import { getSizesByPrefixes } from '@common/base/utils';
import { COMPONENT_DEFAULT_SIZE } from '@common/base/constants';

export const SubmitButton = ({ size = COMPONENT_DEFAULT_SIZE, children }: SubmitButtonProps) => {
  const { button, text } = getSizesByPrefixes<'button' | 'text'>(['button', 'text'], size);

  return (
    <Button type="submit" size={button}>
      <Text size={text}>{children}</Text>
    </Button>
  );
}
