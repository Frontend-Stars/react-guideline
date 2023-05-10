import { withInversifyProvider } from '@utils/inversify';
import { SingleContainer } from './single.container';

export const SingleScope = withInversifyProvider(SingleContainer);
