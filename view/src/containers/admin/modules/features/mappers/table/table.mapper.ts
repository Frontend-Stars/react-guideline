import { injectable } from 'inversify';
import { Feature } from '@containers/admin/modules/features/types';
import { Collection } from '@utils/store';
import { ListMapper } from '@common/list/base';

@injectable()
export class FeatureListMapper implements ListMapper<Feature, Feature>{
  to(data: Array<Feature>): Collection<Feature> {
    const collection: Collection<Feature> = {};

    data.forEach((item) => {
      collection[item.name] = item;
    })

    return collection;
  }

  from(collection: Collection<Feature>): Array<Feature> {
    return Object.values(collection).map((value) => value);
  }
}
