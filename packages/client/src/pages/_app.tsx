import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import globalStyles from '../styles/global'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </ThemeProvider>
  )
}

export default App
