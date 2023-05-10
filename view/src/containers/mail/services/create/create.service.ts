import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import { CreateResource, CreateResourceToken } from '../../resources/create';

@injectable()
export class CreateService {
  constructor(
    @inject(CreateResourceToken) private resource: CreateResource,
  ) {}

  create(data: any): Observable<any> {
    return this.resource.create(data);
  }
}
