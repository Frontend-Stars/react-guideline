import { Content } from '@common/layout/content/Content';
import { HorizontalNavComponent } from '@common/horizontal-nav';
import { CreateProvider } from './create.provider';
import { CreateComponent } from './create.component';

export const CreateContainer = () => {
  return (
      <CreateProvider>
        <HorizontalNavComponent />

        <Content>
          <CreateComponent />
        </Content>
      </CreateProvider>
  );
};
