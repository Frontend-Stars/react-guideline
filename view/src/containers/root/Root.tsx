import { RootRouter } from './RootRouter';
import { withInversifyProvider } from '@utils/inversify';

export const Root = withInversifyProvider(RootRouter);
