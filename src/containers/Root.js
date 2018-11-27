import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../configureStore'
import App from './App'

// Material UI

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Configure redux store
const store = configureStore()

// Base of the app
const ThemedIndex = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <ThemedIndex />
            </Provider>
        )
    }
}