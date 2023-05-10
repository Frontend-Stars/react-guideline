import * as Yup from 'yup';
import { BehaviorSubject } from 'rxjs';
import { injectable } from 'inversify';
import { AbstractBaseForm } from '@utils/form/abstract-base.form';
import { Mail } from '@containers/mail/types';
import { defaultValues } from './constants';

@injectable()
export class CreateForm extends AbstractBaseForm<Mail> {
  data$: BehaviorSubject<Mail> = new BehaviorSubject<Mail>(defaultValues);
  error$: BehaviorSubject<Record<string, string[]>> = new BehaviorSubject<Record<string, string[]>>({});

  protected schema() {
    return Yup.object({
      from: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      to: Yup.string()
        .required('Required'),
      content: Yup.string()
        .required('Required'),
    });
  }

  initialValues(): Mail {
    return defaultValues;
  }
}
