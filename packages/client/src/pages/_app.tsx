import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
//
import { NavigationProvider } from '@/contexts/NavigationContext'
import globalStyle from '@/styles/global'
import { theme } from '@/styles/theme'

/**
 *
 */

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
      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>
      <style jsx global>
        {globalStyle}
      </style>
      {/* TODO  */}
      <style>
        {`
      #__next { height: 100%, width:100% }
    `}
      </style>
    </ThemeProvider>
  )
}

export default App
