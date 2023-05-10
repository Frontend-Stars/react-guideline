import { withInversifyProvider } from '@utils/inversify';
import { ListContainer } from './list.container';

export const ListScope = withInversifyProvider(ListContainer);
