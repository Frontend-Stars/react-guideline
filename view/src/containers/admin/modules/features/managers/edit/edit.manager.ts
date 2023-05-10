import { inject, injectable } from 'inversify';
import { switchMap } from 'rxjs/operators';
import {
  ListSelectionService,
  ListSelectionServiceToken,
} from '@common/list-selection';
import { Feature } from '@containers/admin/modules/features/types';
import { EditResource, EditResourceToken } from '../../resources/edit';
import { EditForm, EditFormToken } from '../../forms/edit';

@injectable()
export class EditManager {
  constructor(
      @inject(ListSelectionServiceToken) private listService: ListSelectionService,
      @inject(EditResourceToken) private resource: EditResource,
      @inject(EditFormToken) private form: EditForm,
  ) {
  }

  cancel(item: Feature): void {
    this.form.reset();
    this.listService.onUnselect(item.name);
  }

  edit(item: Feature): void {
    this.listService.onUnselectAll();
    this.listService.onSelect(item.name);
    this.form.setInitialValues(item);
  }

  save(): void {
    this.form.submit()
      .pipe(
          switchMap((data) => {
            return this.resource.update(data);
          })
      )
      .subscribe(() => {
        this.listService.onUnselectAll();
      });
  }
}
