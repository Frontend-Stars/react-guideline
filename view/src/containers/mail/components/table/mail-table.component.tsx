import React from 'react';
import { Mail } from '@containers/mail/types';
import { SortComponent } from '@common/sort/base/sort.component';
import {
  Body, Cell,
  CellText, HCell,
  Head, HRow, Row,
  Table,
} from '@common/list/components';
import { TheBestTableContainer } from '@common/list/base/components';

const MailTableItem = ({ item }: { item: Mail }) => {
  return (
    <Row>
      <Cell>
        <CellText value={item.from} />
      </Cell>
      <Cell>
        <CellText value={item.to} />
      </Cell>
      <Cell>
        <CellText value={item.content} />
      </Cell>
    </Row>
  );
}

export const MailTableComponent = () => (
    <TheBestTableContainer<Mail, Mail>>
      <Table>
        <Head>
          <HRow>
            <HCell>
              From
              <SortComponent name="from" />
            </HCell>
            <HCell>
              To
              <SortComponent name="to" />
            </HCell>
            <HCell>
              Content
              <SortComponent name="content" />
            </HCell>
          </HRow>
        </Head>

        <Body<Mail> component={MailTableItem} />
      </Table>
    </TheBestTableContainer>
);