import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px;
  border: 0;
  outline: none;
  margin-top: 10px;
  padding: 10px;
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #A328D6;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
`;