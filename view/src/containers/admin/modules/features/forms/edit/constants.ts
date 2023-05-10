import { EditFormData } from './types';

export const EditFormToken = Symbol.for('EditForm');

export const defaultValues: EditFormData = {
  name: '',
  state: false,
  rule: '*',
};
