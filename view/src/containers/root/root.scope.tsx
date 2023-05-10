import { withRootInversifyProvider } from '@utils/inversify';
import { RootContainer } from './root.container';

export const RootScope = withRootInversifyProvider(RootContainer);
