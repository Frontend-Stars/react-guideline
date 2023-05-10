import React from 'react';
import { HText } from '@common/layout/h-text';
import {
  FeatureTableContainer
} from '../../modules/features/components/table/feature-table.container';

export const FeatureListComponent = () => {
  return (
      <div>
        <HText>Feature List</HText>

        <FeatureTableContainer />
      </div>
  );
};
