import { Mail } from '@containers/mail/types';

export const CreateFormToken = Symbol.for('CreateForm');

export const defaultValues: Mail = {
  from: '',
  to: '',
  content: '',
};
