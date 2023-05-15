import React from 'react';
import { Feature } from '@containers/admin/modules/features/types';
import { useInjection } from '@utils/inversify';
import {
  ListSelection,
  ListSelectionService,
  ListSelectionServiceToken,
} from '@common/list-selection';
import { useObservable } from '@utils/rxjs';
import { FormAction } from '@common/form/action';
import { EditManager, EditManagerToken } from '@containers/admin/modules/features/managers/edit';
import {
  Body, Cell, CellBoolean,
  CellText, HCell, Head, HRow,
  Row, Table,
} from '@common/list/components';
import {
  EditBoolFormComponent,
  EditNameFormComponent,
  EditRuleFormComponent,
} from '@containers/admin/modules/features/components/edit-form';
import { TheBestTableContainer } from '@common/list/base/components';

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