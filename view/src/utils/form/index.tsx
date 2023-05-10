import { createContext, PropsWithChildren, useContext } from 'react';
import { useObservable } from '@utils/rxjs';
import { BaseForm } from '@utils/form/abstract-base.form';

export const FormContext = createContext<BaseForm<any> | null>(null);

export type FormWrapperProps = PropsWithChildren<{
  service: BaseForm<any>;
}>;

const useFormFromContext = (): BaseForm<any> => {
  const form = useContext(FormContext);

  if (!form) { throw new Error('Provide Form to Context is required!'); }

  return form;
}

export const FormWrapper = ({ service, children }: FormWrapperProps) => (
    <FormContext.Provider value={service}>
      {children}
    </FormContext.Provider>
);

export const useField = <Data extends Record<string, any>>(name: string) => {
  const form = useFormFromContext();
  const data = useObservable<Data>(form.data$, form.initialValues());
  const error = useObservable<Record<string, string[]>>(form.error$, {});

  return {
    error: error[name] ?? null,
    value: data[name],
    onChange: (value: any) => {
      form.change(name, value);
    },
  }
};
