import { useRootRegistration } from '@utils/inversify';
import { AccessService, AccessServiceToken } from '../../modules/access/services';
import { FeatureService, FeatureServiceToken } from '../../modules/features/services';
import { AccessManager, AccessManagerToken } from '../../modules/access/managers';
import { AccessResource, AccessResourceToken } from '../../modules/access/resources';

export const useAdminProvider = () => {
  useRootRegistration<AccessManager>(AccessManagerToken, AccessManager);
  useRootRegistration<AccessService>(AccessServiceToken, AccessService);
  useRootRegistration<AccessResource>(AccessResourceToken, AccessResource);
  useRootRegistration<FeatureService>(FeatureServiceToken, FeatureService);
}
