import { Content } from '@common/layout/content/Content';
import { HorizontalNavComponent } from '@common/horizontal-nav';
import { AccessListProvider } from './access-list.provider';
import { AccessListComponent } from './access-list.component';

export const AccessListContainer = () => {
  return (
      <AccessListProvider>
        <HorizontalNavComponent />

        <Content>
          <AccessListComponent />
        </Content>
      </AccessListProvider>
  );
};
