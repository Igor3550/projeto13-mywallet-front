import {
  Container,
  Title,
  InputField,
  SaveButton
} from './style'
import { useState } from 'react';

const EntryPage = () => {

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Title>Nova entrada</Title>
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
        <SaveButton>Salvar entrada</SaveButton>
      </form>
    </Container>
  )
}

export default EntryPage;