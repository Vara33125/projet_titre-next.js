import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '@/components/Container';
import '../styles/container.css'
import '../styles/login.css'
import '../styles/store.css'
import '../styles/signup.css'
import '../styles/about_us.css'



export default function App({ Component, pageProps }) {
  return (
  <Container>
    <Component {...pageProps} />
  </Container>
  )
}
