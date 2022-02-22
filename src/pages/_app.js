import '../../styles/globals.scss'
import '../../styles/custom.scss'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return  (
    <Layout>
    <Component  {...pageProps} />
    </Layout>
    )
}

export default MyApp