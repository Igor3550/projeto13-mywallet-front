import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import EntryPage from './components/EntryPage';
import OutputPage from './components/OutputPage';
import UserContext from './contexts/UserContext';

function App() {

  const [ user, setUser ] = useState({});

  return (
    <Container>
      <GlobalStyle />
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/entry' element={<EntryPage />} />
            <Route path='/output' element={<OutputPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
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
