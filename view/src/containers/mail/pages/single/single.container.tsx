import { Content } from '@common/layout/content/Content';
import { HorizontalNavComponent } from '@common/horizontal-nav';
import { SingleProvider } from './single.provider';
import { SingleComponent } from './single.component';

export const SingleContainer = () => {
  return (
      <SingleProvider>
        <HorizontalNavComponent />

        <Content>
          <SingleComponent />
        </Content>
      </SingleProvider>
  );
};
