import * as Yup from 'yup';
import { BehaviorSubject } from 'rxjs';
import { injectable } from 'inversify';
import { AbstractBaseForm } from '@utils/form/abstract-base.form';
import { EditFormData } from './types';
import { defaultValues } from './constants';

@injectable()
export class EditForm extends AbstractBaseForm<EditFormData> {
  data$: BehaviorSubject<EditFormData> = new BehaviorSubject<EditFormData>(defaultValues);
  error$: BehaviorSubject<Record<string, string[]>> = new BehaviorSubject<Record<string, string[]>>({});

  protected schema() {
    return Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      rule: Yup.string()
        .required('Required'),
    });
  }

  initialValues(): EditFormData {
    return defaultValues;
  }
}
