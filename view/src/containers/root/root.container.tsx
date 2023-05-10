import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalNavComponent } from '@common/global-nav/global-nav.component';
import { RootProvider } from '@containers/root/root.provider';
import { BrowserAddressAdapter } from '@utils/browser/BrowserAddressAdapter';
import { RootRouter } from './root.router';

import styles from './styles.scss';

export const RootContainer = () => (
    <RootProvider>
      <BrowserRouter>
        <BrowserAddressAdapter>
          <div className={styles.root}>
            <aside className={styles.aside}>
              <GlobalNavComponent />
            </aside>
            <div className={styles.content}>
              <RootRouter />
            </div>
          </div>
        </BrowserAddressAdapter>
      </BrowserRouter>
    </RootProvider>
);
