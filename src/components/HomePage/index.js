import {
  Container,
  Header,
  Body,
  Footer,
  AddButton
} from './style'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ExtractArea from '../ExtractArea';
import { getExtract } from '../../services/mywallet';

const HomePage = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  /*
  
    {
      id:1,
      date: '08/09/2022',
      description: "lanche",
      price: 22.00,
      type: 'output'
    },
    {
      id:2,
      date: '08/09/2022',
      description: "uber",
      price: 22.00,
      type: 'entry'
    },
    {
      id:3,
      date: '03/09/2022',
      description: "uber",
      price: 21.00,
      type: 'entry'
    }
  
  */

  const [extractList, setExtractList] = useState([]);

  useEffect(() => {
    const promise = getExtract(user.token);
    promise.catch((error) => {
      if(error.response.status === 401){
        navigate('/login')
      }else{
        alert(`Ocorreu um erro inesperado: ${error.message}`);
      }
    })
    promise.then((res) => {
      setExtractList(res.data)
    })
  }, [])

  function handleExit (){
    localStorage.setItem('mywalletUser', JSON.stringify())
    navigate('/login');
  }

  return (
    <Container>
      <Header>
        <h1>Olá, {user.name}</h1>
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