import React from 'react';
import { useInjection } from '@utils/inversify';
import { FormWrapper } from '@utils/form';
import { RowComponent } from '@common/form/layout/row/row.component';
import { LabelComponent } from '@common/form/label/label.component';
import { InputComponent } from '@common/adapter/input/input.component';
import { TextareaComponent } from '@common/adapter/textarea/textarea.component';
import {
  CreateForm,
  CreateFormToken,
} from '../../forms/create';

export const CreateFormComponent = () => {
  const form = useInjection<CreateForm>(CreateFormToken);

  return (
      <FormWrapper service={form}>
        <RowComponent>
          <LabelComponent label='From' />
          <InputComponent name='from'/>

          <LabelComponent label='To' />
          <InputComponent name='to'/>

          <LabelComponent label='Content' />
          <TextareaComponent name='content'/>
        </RowComponent>
      </FormWrapper>
  );
}

