import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Container,
  Page,
  Title,
  InputField,
  LoginButton,
  SignUpButton
} from './style'
import {signUp} from '../../services/mywallet'

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

    const promise = signUp(body);
    promise.catch((error) => {
      if(error.response.status === 409){
        alert(`Erro: E-mail já cadastrado!`);
      }else{
        alert(`Ocorreu um erro inesperado: ${error.message}`);
      }
    })
    promise.then(() => {
      alert('Cadastro completo!');
      navigate('/login');
    })
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
        <LoginButton onClick={() => navigate('/login')}>Já tem uma conta? Entre agora!</LoginButton>
      </Page>
    </Container>
  )
}

export default SignUpPage;