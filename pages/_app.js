import '../styles/globals.css'
import { Navbar } from './components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <main className='main-total'>
    <Navbar />
    <Component {...pageProps} />
  </main>
  </>
  )
}

export default MyApp
