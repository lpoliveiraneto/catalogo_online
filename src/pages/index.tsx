import Head from 'next/head'
import { Container } from '../styles/pages/Home'

//importar imagens svg

const Home: React.FC = () => {
  return(
    <Container>
      <Head>
        <title>Cardápio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <h1>Tá saindo o monstro</h1>
       <p>Utilizando o styled component</p>

    </Container>
  )
}

export default Home
