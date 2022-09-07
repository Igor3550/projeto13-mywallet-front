import {
  Container,
  Page,
  Title,
  EmailField,
  PasswordField,
  LoginButton,
  SignUpButton
} from './style'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Page>
        <Title>MyWallet</Title>
        <EmailField placeholder='E-mail'/>
        <PasswordField placeholder='Senha' />
        <LoginButton>Entrar</LoginButton>
        <SignUpButton onClick={() => navigate('/sign-up')}>Primeira vez? Cadastre-se!</SignUpButton>
      </Page>
    </Container>
  )
}

export default LoginPage;