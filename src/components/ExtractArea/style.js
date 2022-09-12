import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span{
    height: 100%;
    width: 100%;
    max-width: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  h1{
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    text-align: center;
  }
`; 

export const ExtractField = styled.div`
  width: 100%;
  height: 85%;
`;

export const ExtractItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;

  div {
    display: flex;
  }

  .date {
    color: #c6c6c6;
  }
  .description {
    color: #000;
    padding-left: 10px;
  }
  .price {
    color: ${props => props.type === 'input' ? '#03AC00' : '#C70000'};
    padding-right: 15px;
  }
  .deleteButton {
    color: #c6c6c6;
  }
`;

export const TotalField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .total {
    color: ${props => props.balance === 'positive' ? '#03AC00' : '#C70000'}
  }
  .totalTitle{
    font-size: 17px;
    font-weight: 700;
  }
`;