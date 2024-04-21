import React, { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { globalStyles } from './styles';
import './config/ReactotronConfig';
import RootStackContainer from './routes';
import { setTopLevelNavigator } from './utils';

const App = forwardRef((props, ref) => {
  return (
    <ThemeProvider theme={globalStyles}>
      <RootStackContainer
        ref={ref}
      />
    </ThemeProvider>
  );
});

export default App;
