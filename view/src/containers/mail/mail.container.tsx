import { MailRouter } from './mail.router';
import { MailProvider } from './mail.provider';

export const MailContainer = () => <MailProvider><MailRouter /></MailProvider>;
