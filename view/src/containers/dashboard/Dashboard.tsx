import React from 'react';
import { LatestNewsWidgetLoadable } from '../news/widgets/latest-news/LatestNewsWidgetLoadable';

export const Dashboard = (): JSX.Element => (
  <>
    <h1>My Awesome Dashboard</h1>

    <section>
      <h2>Latest News</h2>
      <LatestNewsWidgetLoadable />
    </section>

    <section>
      <h2>Coming soon (Todo)</h2>
      <div>place for todo list</div>
    </section>
  </>
);
