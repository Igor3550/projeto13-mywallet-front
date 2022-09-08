import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 670px;
`;
export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.text`
  font-family: 'Saira Stencil One', cursive;
  font-size: 32px;
  color: #fff;
  margin: 20px;
`;
export const InputField = styled.input`
  width: 90%;
  height: 60px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px;
  border: 0;
  outline: none;
  margin-top: 10px;
  padding: 10px;
`;
export const PasswordField = styled.input`
  width: 90%;
  height: 60px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px;
  border: 0;
  outline: none;
  margin-top: 10px;
  padding: 10px;
`;
export const SignUpButton = styled.button`
  width: 90%;
  height: 45px;
  background-color: #A328D6;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
`;
export const LoginButton = styled.button`
  width: 90%;
  height: 45px;
  background-color: #8C11BE;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
`;