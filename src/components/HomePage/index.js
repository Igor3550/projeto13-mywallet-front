import {
  Container,
  Header,
  Body,
  Footer,
  AddButton
} from './style'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import ExtractArea from '../ExtractArea';

const HomePage = () => {
  const navigate = useNavigate();

  /*
  {
    date: 08/09/2022,
    description: "lanche",
    price: 22.00
  }
  */

  const [extractList, setExtractList] = useState([
    {
      date: '08/09/2022',
      description: "lanche",
      price: 22.00,
      type: 'output'
    },
    {
      date: '08/09/2022',
      description: "uber",
      price: 22.00,
      type: 'entry'
    },
    {
      date: '03/09/2022',
      description: "uber",
      price: 21.00,
      type: 'entry'
    }
  ])

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
        <ExtractArea extractList={extractList} />
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