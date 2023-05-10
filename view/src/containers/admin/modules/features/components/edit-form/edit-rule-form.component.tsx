import React from 'react';
import { useInjection } from '@utils/inversify';
import { FormWrapper } from '@utils/form';
import { InputComponent } from '@common/adapter/input/input.component';
import { EditForm, EditFormToken } from '../../forms/edit';

export const EditRuleFormComponent = () => {
  const form = useInjection<EditForm>(EditFormToken);

  return (
      <FormWrapper service={form}>
        <InputComponent name='rule'/>
      </FormWrapper>
  );
}

