import { withInversifyProvider } from '@utils/inversify';
import { FeatureListContainer } from './feature-list.container';

export const FeatureListScope = withInversifyProvider(FeatureListContainer);
