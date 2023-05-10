import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import { EditForm, EditFormToken } from '@containers/admin/modules/features/forms/edit';
import { ListSelectionService, ListSelectionServiceToken } from '@common/list-selection';
import { EditManager, EditManagerToken } from '@containers/admin/modules/features/managers/edit';
import { EditResource, EditResourceToken } from '@containers/admin/modules/features/resources/edit';

export const FeatureListProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<EditManager>(EditManagerToken, EditManager);
  useRegistration<ListSelectionService>(ListSelectionServiceToken, ListSelectionService);
  useRegistration<EditResource>(EditResourceToken, EditResource);
  useRegistration<EditForm>(EditFormToken, EditForm);

  return <>{children}</>;
};
