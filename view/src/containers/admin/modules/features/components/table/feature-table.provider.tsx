import { PropsWithChildren } from 'react';
import { Feature } from '@containers/admin/modules/features/types';
import { useRegistration } from '@utils/inversify';
import {
  FeatureTableResource
} from '@containers/admin/modules/features/resources/list/table.resource';
import {
  FeatureListMapper,
} from '@containers/admin/modules/features/mappers/table/table.mapper';
import {
  ListMapper,
  ListMapperToken,
  ListResource,
  ListResourceToken,
} from '@common/list/base';

export const FeatureTableProvider = ({children}: PropsWithChildren<any>) => {
  useRegistration<ListMapper<Feature, Feature>>(ListMapperToken, FeatureListMapper);
  useRegistration<ListResource<Feature>>(ListResourceToken, FeatureTableResource);

  return <>{children}</>;
}