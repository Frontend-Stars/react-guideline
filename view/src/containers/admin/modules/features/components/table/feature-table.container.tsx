import { FeatureTableComponent } from './feature-table.component';
import { FeatureTableProvider } from './feature-table.provider';

export const FeatureTableContainer = () => (
    <FeatureTableProvider>
      <FeatureTableComponent />
    </FeatureTableProvider>
);
