import '../styles/globals.css'
import {CafeteriaProvider} from '../context/CafeteriaProvider'
function MyApp({ Component, pageProps }) {
  return (
    <CafeteriaProvider>
      <Component {...pageProps} />
    </CafeteriaProvider>
  )
}

export default MyApp
