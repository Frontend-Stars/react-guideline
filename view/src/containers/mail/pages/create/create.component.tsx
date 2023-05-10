import { useInjection } from '@utils/inversify';
import { HText } from '@common/layout/h-text';
import { CreateFormComponent } from '../../components/create-form/create-form.component';
import { CreateManager, CreateManagerToken } from '../../managers/create';

export const CreateComponent = () => {
  const manager = useInjection<CreateManager>(CreateManagerToken);

  return (
    <div>
      <HText>New Mail</HText>
      <CreateFormComponent />
      <button onClick={() => manager.create()}>create</button>
    </div>
  );
};
