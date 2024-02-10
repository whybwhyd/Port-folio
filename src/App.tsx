import React from 'react';
import { RecoilRoot } from 'recoil';
import { OverlayProvider } from './recoil/modalState';
import Router from 'shared/Router';

function App() {
  return (
    <RecoilRoot>
      <OverlayProvider>
        <Router />
      </OverlayProvider>
    </RecoilRoot>
  );
}

export default App;
