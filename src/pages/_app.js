import '@/styles/globals.css'
import Footer from './components/footer'
import Navbar from './components/nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )

}
