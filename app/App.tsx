import React from 'react';

import { CovidProvider } from './Contexts';
import { DashboardScreen } from './Screens';

declare var global: { HermesInternal: null | {} };

const App = () => {
  return (
    <CovidProvider>
      <DashboardScreen />
    </CovidProvider>
  );
};

export default App;
