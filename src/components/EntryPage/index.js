import {
  Container,
  Title,
  InputField,
  SaveButton
} from './style'
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { createExtract } from '../../services/mywallet';
import { useNavigate } from 'react-router-dom';

const EntryPage = () => {
  const navigate = useNavigate()

  const { user } = useContext(UserContext)

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      description,
      price: price.replace(',', '.'),
      type: 'input'
    }

    const promise = createExtract(body, user.token);
    promise.catch((error) => {
      if(error.response.status === 401){
        alert(`Ocorreu um erro: ${error.message}`);
        navigate('/login');
      }else{
        alert(`Ocorreu um erro: ${error.message}`);
      }
      console.log(error)
    })
    promise.then(() => {
      navigate('/');
    })
  }
  return (
    <Container>
      <Title>Nova entrada</Title>
      <form onSubmit={handleSubmit}>
        <InputField 
          placeholder='Valor'
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <InputField 
          placeholder='Descrição'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <SaveButton type='submit'>Salvar entrada</SaveButton>
      </form>
    </Container>
  )
}

export default EntryPage;