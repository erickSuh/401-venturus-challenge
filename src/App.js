import React from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Global from './theme/global';
import Theme from './theme/theme';
import store from './store';
import i18n from './i18n';
import Routes from './Routes';
import '@yaireo/tagify/dist/tagify.css';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={Theme}>
            <Global />
            <Routes />
          </ThemeProvider>
        </I18nextProvider>
      </DndProvider>
    </Provider>
  );
}

export default App;
