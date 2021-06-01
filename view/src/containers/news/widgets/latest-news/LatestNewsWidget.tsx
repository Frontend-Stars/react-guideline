import React from 'react';
import { LatestNewsWidgetProvider } from './LatestNewsWidgetProvider';
import { LatestNewsWidgetContainer } from './LatestNewsWidgetContainer';

export const LatestNewsWidget = (): JSX.Element => (
  <LatestNewsWidgetProvider>
    <LatestNewsWidgetContainer />
  </LatestNewsWidgetProvider>
);
