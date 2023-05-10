import React from 'react';
import { useInjection } from '@utils/inversify';
import { FormWrapper } from '@utils/form';
import { CheckboxComponent } from '@common/adapter/checkbox/checkbox.component';
import { EditForm, EditFormToken } from '../../forms/edit';

export const EditBoolFormComponent = () => {
  const form = useInjection<EditForm>(EditFormToken);

  return (
      <FormWrapper service={form}>
        <CheckboxComponent name='state'/>
      </FormWrapper>
  );
}

