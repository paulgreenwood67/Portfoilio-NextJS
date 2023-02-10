import Layout from '@/components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'

export default function App({ Component, pageProps }) {
  return (
    
  <Layout>
<div className='grad' >
<Component {...pageProps} />
 <style jsx>{`
  .grad{
    min-height:580px;
  }
 `}</style>
 </div>
  </Layout>
  )
 
}
