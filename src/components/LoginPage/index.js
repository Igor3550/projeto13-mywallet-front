import {
  Container,
  Page,
  Title,
  InputField,
  LoginButton,
  SignUpButton
} from './style'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { login } from '../../services/mywallet'
import UserContext from '../../contexts/UserContext';

const LoginPage = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if(localStorage.getItem('mywalletUser') !== null && localStorage.getItem('mywalletUser') !== 'undefined'){
      const mywalletUser = JSON.parse(localStorage.getItem('mywalletUser'))
      setUser(mywalletUser);
      navigate('/home');
    }
  }, [])

  function handleSubmit (e) {
    e.preventDefault();

    const body = {
      email,
      password
    }

    const promise = login(body);
    promise.catch((error) => {
      if(error.response.status === 401){
        alert('Usuário e/ou senha incorreto(s)');
      }else{
        alert(`Ocorreu um erro inesperado: ${error.message}`);
      }
      console.log(error);
    })
    promise.then((res) => {
      setUser(res.data)
      localStorage.setItem('mywalletUser', JSON.stringify(res.data))
      navigate('/home');
    })

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