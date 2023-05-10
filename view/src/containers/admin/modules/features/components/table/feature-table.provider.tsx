import { PropsWithChildren } from 'react';
import { Feature } from '@containers/admin/modules/features/types';
import { useRegistration } from '@utils/inversify';
import {
  TableMapper, TableMapperToken,
  TableResource, TableResourceToken
} from '@common/table';
import {
  FeatureTableResource
} from '@containers/admin/modules/features/resources/list/table.resource';
import {
  FeatureTableMapper
} from '@containers/admin/modules/features/mappers/table/table.mapper';

export const FeatureTableProvider = ({children}: PropsWithChildren<any>) => {
  useRegistration<TableMapper<Feature, Feature>>(TableMapperToken, FeatureTableMapper);
  useRegistration<TableResource<Feature>>(TableResourceToken, FeatureTableResource);

  return <>{children}</>;
}