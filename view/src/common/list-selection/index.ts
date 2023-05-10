import { BehaviorSubject, Observable } from 'rxjs';
import { injectable } from 'inversify';

export type ListSelection = {
  id: string;
  state: boolean;
};

export const ListSelectionServiceToken = Symbol.for('ListSelectionService');

@injectable()
export class ListSelectionService {
  private state: { [key: string]: BehaviorSubject<ListSelection> } = {};

  selectById(id: string): Observable<ListSelection> {
    this.initBehaviorSubjectItem(id, false);

    return this.state[id];
  }

  onUnselectAll(): void {
    Object.values(this.state).forEach((list) =>{
      list.next({ ...list.value, state: false });
    });
  }

  onToggle(id: string): void {
    this.initBehaviorSubjectItem(id, false);

    this.state[id].next({ id, state: !this.state[id].value.state});
  }

  onSelect(id: string): void {
    this.initBehaviorSubjectItem(id, true);

    this.state[id].next({ id, state: true });
  }

  onUnselect(id: string): void {
    this.initBehaviorSubjectItem(id, false);

    this.state[id].next({ id, state: false });
  }

  private initBehaviorSubjectItem(id: string, state: boolean): void {
    if (!this.state[id]) {
      this.state[id] = new BehaviorSubject<ListSelection>({
        id,
        state,
      });
    }
  }
}