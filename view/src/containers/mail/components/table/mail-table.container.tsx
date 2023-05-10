import { MailTableProvider } from './mail-table.provider';
import { MailTableComponent } from './mail-table.component';

export const MailTableContainer = () => (
    <MailTableProvider>
      <MailTableComponent />
    </MailTableProvider>
);
