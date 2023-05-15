import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import { Mail } from '@containers/mail/types';
import { MailTableResource } from '@containers/mail/resources/list/table.resource';
import { MailListMapper } from '@containers/mail/mappers/table/table.mapper';
import {
  ListMapper, ListMapperToken,
  ListResource, ListResourceToken,
} from '@common/list/base';

export const MailTableProvider = ({children}: PropsWithChildren<any>) => {
  useRegistration<ListMapper<Mail, Mail>>(ListMapperToken, MailListMapper);
  useRegistration<ListResource<Mail>>(ListResourceToken, MailTableResource);

  return <>{children}</>;
}