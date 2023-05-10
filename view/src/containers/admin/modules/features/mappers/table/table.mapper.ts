import { injectable } from 'inversify';
import { TableMapper } from '@common/table';
import { Feature } from '@containers/admin/modules/features/types';
import { Collection } from '@utils/store';

@injectable()
export class FeatureTableMapper implements TableMapper<Feature, Feature>{
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
