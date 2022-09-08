import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Container,
  Page,
  Title,
  InputField,
  LoginButton,
  SignUpButton
} from './style'

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    if(password !== confirmPass){
      alert('Verifique os campos: as senhas devem ser idênticas!');
      return;
    }

    const body = {
      name,
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
            type='text' 
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <InputField 
            type='password' 
            placeholder='Confirme a senha'
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />
          <SignUpButton>Cadastrar</SignUpButton>
        </form>
        <LoginButton onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</LoginButton>
      </Page>
    </Container>
  )
}

export default SignUpPage;