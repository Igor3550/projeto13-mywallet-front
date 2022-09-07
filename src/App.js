import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  background-color: #8C11BE;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
`;

export default App;
