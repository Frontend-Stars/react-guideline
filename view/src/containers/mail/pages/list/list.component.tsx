import React from 'react';
import { HText } from '@common/layout/h-text';
import { MailTableContainer } from '@containers/mail/components/table/mail-table.container';

export const ListComponent = () => {
  return (
    <div>
      <HText>List Mail</HText>

      <MailTableContainer />
    </div>
  );
};
