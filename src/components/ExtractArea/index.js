import {
  Container,
  ExtractField,
  ExtractItem,
  TotalField
} from './style'
import dayjs from 'dayjs'

const ExtractArea = ({ extractList }) => {

  let balance = 0;
  let balanceDecision = 'positive';
  extractList.forEach(element => {
    if(element.type === 'entry'){
      balance += element.price
    }else{
      balance -= element.price
    }
  });
  balanceDecision = (balance === -balance) ? 'negative' : 'positive'

  return (
    <Container>
      <ExtractField>
        {extractList.length === 0 ? <span><h1>Não há registros de entrada ou saída</h1></span> : 
          extractList.map((item) => {
            return(
              <ExtractItem type={item.type}>
                <div>
                  <p className='date'>{dayjs(item.date).format('DD/MM')}</p>
                  <p className='description'>{item.description}</p>
                </div>
                <p className='price'>{item.price.toFixed(2).replace('.', ',')}</p>
              </ExtractItem>
            )
          })
        }
      </ExtractField>
      <TotalField balance={balanceDecision}>
        <p className='totalTitle'>SALDO</p>
        <p className='total'>{balance.toFixed(2).replace('.', ',')}</p>
      </TotalField>
    </Container>
  )
}

export default ExtractArea;