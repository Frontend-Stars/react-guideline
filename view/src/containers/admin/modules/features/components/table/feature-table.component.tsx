import { Table } from '@common/table/components/Table';
import { Head } from '@common/table/components/Head';
import { Body } from '@common/table/components/Body';
import { Row } from '@common/table/components/Row';
import { HRow } from '@common/table/components/HRow';
import { Cell } from '@common/table/components/Cell';
import { HCell } from '@common/table/components/HCell';
import { CellBoolean } from '@common/table/components/CellBoolean';
import { CellText } from '@common/table/components/CellText';
import { TheBestTableContainer } from '@common/table/base/the-best-table.container';
import { Feature } from '@containers/admin/modules/features/types';
import { useInjection } from '@utils/inversify';
import {
  ListSelection,
  ListSelectionService,
  ListSelectionServiceToken,
} from '@common/list-selection';
import { useObservable } from '@utils/rxjs';
import {
  EditBoolFormComponent
} from '@containers/admin/modules/features/components/edit-form/edit-bool-form.component';
import {
  EditNameFormComponent
} from '@containers/admin/modules/features/components/edit-form/edit-name-form.component';
import {
  EditRuleFormComponent
} from '@containers/admin/modules/features/components/edit-form/edit-rule-form.component';
import { FormAction } from '@common/form/action';
import {
  EditManager,
  EditManagerToken,
} from '@containers/admin/modules/features/managers/edit';

const FeatureTableItem = ({ item }: { item: Feature }) => {
  const listService = useInjection<ListSelectionService>(ListSelectionServiceToken);
  const manager = useInjection<EditManager>(EditManagerToken);
  const selection = useObservable<ListSelection>(
      listService.selectById(item.name),
      { state: false, id: item.name }
  );

  return (
      <Row>
        <Cell>
          { !selection.state ? <CellText value={item.name} /> : <EditNameFormComponent /> }
        </Cell>
        <Cell>
          { !selection.state ? <CellBoolean value={item.state} /> : <EditBoolFormComponent /> }
        </Cell>
        <Cell>
          { !selection.state ? <CellText value={item.rule} /> : <EditRuleFormComponent /> }
        </Cell>
        <Cell>
          <FormAction
              isEdit={selection.state}
              onCancel={() => manager.cancel(item)}
              onEdit={() => manager.edit(item)}
              onSave={() => manager.save()}
          />
        </Cell>
      </Row>
  );
}

export const FeatureTableComponent = () => (
    <TheBestTableContainer<Feature, Feature>>
      <Table>
        <Head>
          <HRow>
            <HCell>Name</HCell>
            <HCell>Disable/Enable</HCell>
            <HCell>Rule</HCell>
            <HCell>Action</HCell>
          </HRow>
        </Head>

        <Body<Feature> component={FeatureTableItem} />
      </Table>
    </TheBestTableContainer>
);