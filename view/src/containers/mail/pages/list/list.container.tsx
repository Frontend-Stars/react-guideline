import { Content } from '@common/layout/content/Content';
import { HorizontalNavComponent } from '@common/horizontal-nav';
import { ListProvider } from './list.provider';
import { ListComponent } from './list.component';

export const ListContainer = () => {
  return (
      <ListProvider>
        <HorizontalNavComponent />

        <Content>
          <ListComponent />
        </Content>
      </ListProvider>
  );
};
