import '../css/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id='app-wrapper'>
      <Component {...pageProps} />
    </div>
  )
}
