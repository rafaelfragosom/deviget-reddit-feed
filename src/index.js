import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import AppContainer from './containers/AppContainer'
import store from './store'
import * as serviceWorker from './serviceWorker'
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9800',
      contrastText: '#fff'
    },
    secondary: {
      main: '#00bcd4'
    }
  },
  typography: {
    useNextVariants: true,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
)


serviceWorker.unregister()
