import { Table } from '@common/table/components/Table';
import { Head } from '@common/table/components/Head';
import { Body } from '@common/table/components/Body';
import { Row } from '@common/table/components/Row';
import { HRow } from '@common/table/components/HRow';
import { Cell } from '@common/table/components/Cell';
import { HCell } from '@common/table/components/HCell';
import { CellText } from '@common/table/components/CellText';
import { TheBestTableContainer } from '@common/table/base/the-best-table.container';
import { Mail } from '@containers/mail/types';
import { SortComponent } from '@common/sort/base/sort.component';

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