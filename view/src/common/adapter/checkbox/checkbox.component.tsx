import { useField } from '@utils/form';
import { CheckboxProps } from '@common/adapter/checkbox/types';

export const CheckboxComponent = ({ name }: CheckboxProps) => {
  const {value, error, onChange} = useField(name);

  return (
      <div>
        <input
            type="checkbox"
            onChange={(event) => onChange(event.target.checked)}
            checked={value}
        />
        {error && <div style={{ color: 'red' }}>{error.join(', ')}</div>}
      </div>
  );
}
