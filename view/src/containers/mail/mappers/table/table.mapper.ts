import { injectable } from 'inversify';
import { Collection } from '@utils/store';
import { Mail } from '@containers/mail/types';
import { ListMapper } from '@common/list/base';

@injectable()
export class MailListMapper implements ListMapper<Mail, Mail>{
  to(data: Array<Mail>): Collection<Mail> {
    const collection: Collection<Mail> = {};

    data.forEach((item) => {
      collection[item.to] = item;
    })

    return collection;
  }

  from(collection: Collection<Mail>): Array<Mail> {
    return Object.values(collection).map((value) => value);
  }
}
