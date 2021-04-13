import Page from '../components/Page';

export function MyApp ({ Component, pageProps}) {
  return(
    <Page>
      <Component {...pageProps}/>
    </Page>
  )
}