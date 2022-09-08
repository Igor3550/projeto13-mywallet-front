import {
  Container,
  Header,
  Body,
  ExtractArea,
  Footer,
  AddButton
} from './style'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  function handleExit (){
    console.log('Exit')
  }

  return (
    <Container>
      <Header>
        <h1>Olá, Fulano</h1>
        <ion-icon onClick={handleExit} name="exit-outline"></ion-icon>
      </Header>
      <Body>
        <ExtractArea />
      </Body>
      <Footer>
        <AddButton onClick={() => navigate('/entry')}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </AddButton>
        <AddButton onClick={() => navigate('/output')}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </AddButton>
      </Footer>
    </Container>
  )
}

export default HomePage;