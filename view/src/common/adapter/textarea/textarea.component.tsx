import { InputProps } from '@common/adapter/input/types';
import { useField } from '@utils/form';

export const TextareaComponent = ({ name }: InputProps) => {
  const {value, error, onChange} = useField(name);

  return (
      <div>
        <textarea onChange={(event) => onChange(event.target.value)} value={value} />
        {error && <div style={{ color: 'red' }}>{error.join(', ')}</div>}
      </div>
  );
}
