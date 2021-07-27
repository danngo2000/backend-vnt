import { FC, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
        <title>Lusso Backend</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
