import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MotionConfig } from 'framer-motion'
import theme from './theme'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MotionConfig reducedMotion="user">
            <div onContextMenu={e => e.preventDefault()}>
              <App />
            </div>
          </MotionConfig>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
