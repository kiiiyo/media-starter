import React from 'react'
import { AppProps } from 'next/app'

// FIXME:
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
