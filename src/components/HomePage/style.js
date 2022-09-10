import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding: 0 20px;
`;
export const Header = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1{
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }

  ion-icon{
    font-size: 32px;
    color: #fff;
  }

`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65%;
`;
export const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 20px 0;
`;
export const AddButton = styled.div`
  width: 48%;
  height: 100%;
  border: 0;
  border-radius: 5px;
  background-color: #A328D6;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;

  ion-icon {
    color: #fff;
    font-size: 30px;
  }
`;