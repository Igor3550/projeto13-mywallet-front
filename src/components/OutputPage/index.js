import {
  Container,
  Title,
  InputField,
  SaveButton
} from './style'
import { useState } from 'react';

const OutputPage = () => {

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Title>Nova saída</Title>
      <form onSubmit={handleSubmit}>
        <InputField 
          placeholder='Valor'
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
        <SaveButton>Salvar saída</SaveButton>
      </form>
    </Container>
  )
}

export default OutputPage;