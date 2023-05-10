import { AdminProvider } from '@containers/admin/admin.provider';
import { AdminRouter } from './admin.router';

export const AdminContainer = () => (
    <AdminProvider>
      <AdminRouter />
    </AdminProvider>
);
