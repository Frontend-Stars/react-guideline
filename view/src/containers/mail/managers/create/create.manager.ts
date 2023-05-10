import { inject, injectable } from 'inversify';
import { switchMap } from 'rxjs/operators';
import { CreateService, CreateServiceToken } from '../../services/create';
import { CreateResource, CreateResourceToken } from '../../resources/create';
import { CreateForm, CreateFormToken } from '../../forms/create';

@injectable()
export class CreateManager {
  constructor(
      @inject(CreateResourceToken) private resource: CreateResource,
      @inject(CreateServiceToken) private service: CreateService,
      @inject(CreateFormToken) private from: CreateForm,
  ) {
  }

  create(): void {
    this.from.submit().pipe(
        switchMap(this.service.create)
    ).subscribe();
  }
}
