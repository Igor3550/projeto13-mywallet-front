import {
  Container,
  Page,
  Title,
  InputField,
  LoginButton,
  SignUpButton
} from './style'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault();

    const body = {
      email,
      password
    }

    console.log(body)
  }

  return (
    <Container>
      <Page>
        <Title>MyWallet</Title>
        <form onSubmit={handleSubmit}>
          <InputField
            type='email' 
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField 
            type='password' 
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <LoginButton>Entrar</LoginButton>
        </form>
        <SignUpButton onClick={() => navigate('/sign-up')}>Primeira vez? Cadastre-se!</SignUpButton>
      </Page>
    </Container>
  )
}

export default LoginPage;