import React from 'react';
import { ThemeProvider } from 'styled-components';
import BaseLayout from '~/containers/BaseLayout';
import Global from '~/theme/global';
import Theme from '~/theme/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global />
        <BaseLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
