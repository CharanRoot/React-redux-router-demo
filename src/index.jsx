import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './App/Store';
import { App } from './App';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// setup fake backend
import { configureFakeBackend } from './App/Mocks';
configureFakeBackend();

render(
    <Provider store={store}>
         <MuiThemeProvider muiTheme={getMuiTheme()}>
         <div style={{ padding: 15 }}>
        <App />
         </div>
    </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);