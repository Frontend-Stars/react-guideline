import { FormActionProps } from '@common/form/action/types';

import styles from './styles.scss';

export const FormAction = ({ onSave, onCancel, onEdit, isEdit = false }: FormActionProps) => {
  return (
      <div className={styles.root}>
        { isEdit ? (
            <>
              <button onClick={onSave}>Save</button>
              <button onClick={onCancel}>Cancel</button>
            </>
        ) : <button onClick={onEdit}>Edit</button> }
      </div>
  );
}