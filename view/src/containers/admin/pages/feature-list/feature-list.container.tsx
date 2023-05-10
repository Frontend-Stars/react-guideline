import { Content } from '@common/layout/content/Content';
import { HorizontalNavComponent } from '@common/horizontal-nav';
import { FeatureListProvider } from './feature-list.provider';
import { FeatureListComponent } from './feature-list.component';

export const FeatureListContainer = () => {
  return (
      <FeatureListProvider>
        <HorizontalNavComponent />

        <Content>
          <FeatureListComponent />
        </Content>
      </FeatureListProvider>
  );
};
