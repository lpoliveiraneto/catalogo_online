import Head from 'next/head'
import BoxOption from '../components/BoxOption'
import CardProduct from '../components/Card'
import Header from '../components/Header'
import { Menu } from '../components/Menu'
import { Container } from '../styles/pages/Home'

//importar imagens svg

const Home: React.FC = () => {
  return(
    <Container>
        <Head >
            <div>Testando Aplicação</div>
        </Head>
        <Menu >
                <Header />
        </Menu>
            <BoxOption />
    </Container>

  )
}

export default Home
