import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './ducks/store'
import { ThemeProvider } from 'styled-components'
import mainTheme from './css_theme'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ThemeProvider theme={mainTheme}>
                <App />
            </ThemeProvider>
        </HashRouter>
    </Provider>
    , document.getElementById('root')

);
