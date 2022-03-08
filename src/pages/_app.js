import {CookiesProvider} from "react-cookie"
import dynamic from 'next/dynamic'
import '../../styles/globals.scss'
import '../../styles/custom.scss'
const Layout = dynamic(() => import ('../components/Layout'))


function MyApp({ Component, pageProps }) {
  return  (
    <CookiesProvider>
    <Layout>
    <Component  {...pageProps} />
    </Layout>
    </CookiesProvider>
    )
}

export default MyApp
