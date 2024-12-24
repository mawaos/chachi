import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    primary: {
      main: '#30323D', // brown color
    },
    secondary: {
      main: '#E8C547',
    },
    background: {
      default: '#4D5061', // black background color
    },
    sub: {
      main: '#E8C547',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: '#5C80BC',
    },
    body1: {
      color: '#cdd1c4',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)