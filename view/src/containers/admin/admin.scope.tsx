import { withInversifyProvider } from '@utils/inversify';
import { AdminContainer } from './admin.container';

export const AdminScope = withInversifyProvider(AdminContainer);
