import { withInversifyProvider } from '@utils/inversify';
import { CreateContainer } from './create.container';

export const CreateScope = withInversifyProvider(CreateContainer);
