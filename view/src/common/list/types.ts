import { BaseCollection } from '@utils/store';
import { injectable } from 'inversify';

@injectable()
export class ListCollection<TData> extends BaseCollection<TData> {}
