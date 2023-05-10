import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import {
  TableMapper, TableMapperToken,
  TableResource, TableResourceToken
} from '@common/table';
import { Mail } from '@containers/mail/types';
import { MailTableResource } from '@containers/mail/resources/list/table.resource';
import { MailTableMapper } from '@containers/mail/mappers/table/table.mapper';

export const MailTableProvider = ({children}: PropsWithChildren<any>) => {
  useRegistration<TableMapper<Mail, Mail>>(TableMapperToken, MailTableMapper);
  useRegistration<TableResource<Mail>>(TableResourceToken, MailTableResource);

  return <>{children}</>;
}