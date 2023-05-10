import { withInversifyProvider } from '@utils/inversify';
import { AccessListContainer } from './access-list.container';

export const AccessListScope = withInversifyProvider(AccessListContainer);
