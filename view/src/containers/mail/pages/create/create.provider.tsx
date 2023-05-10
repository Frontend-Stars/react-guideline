import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';

import { CreateForm, CreateFormToken } from '../../forms/create';
import { CreateResource, CreateResourceToken } from '../../resources/create';
import { CreateManager, CreateManagerToken } from '../../managers/create';
import { CreateService, CreateServiceToken } from '../../services/create';

export const CreateProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<CreateManager>(CreateManagerToken, CreateManager);
  useRegistration<CreateResource>(CreateResourceToken, CreateResource);
  useRegistration<CreateService>(CreateServiceToken, CreateService);
  useRegistration<CreateForm>(CreateFormToken, CreateForm);

  return <>{children}</>;
};
