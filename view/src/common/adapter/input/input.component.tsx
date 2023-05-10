import { InputComponent as Input } from '@common/form/input/input.component';
import { InputProps } from '@common/adapter/input/types';
import { useField } from '@utils/form';

export const InputComponent = ({ name }: InputProps) => {
  const {value, error, onChange} = useField(name);

  return (
      <div>
        <Input hasError={Boolean(error)} onChange={(event) => onChange(event.target.value)} value={value} />
        {error && <div style={{ color: 'red' }}>{error.join(', ')}</div>}
      </div>
  );
}
