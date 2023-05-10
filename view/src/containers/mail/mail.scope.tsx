import { withInversifyProvider } from '@utils/inversify';
import { MailContainer } from './mail.container';

export const MailScope = withInversifyProvider(MailContainer);
