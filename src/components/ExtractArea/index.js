import {
  Container,
  ExtractField,
  ExtractItem,
  TotalField
} from './style'
import dayjs from 'dayjs'

const ExtractArea = ({ extractList }) => {

  console.log(extractList)

  let balance = 0;
  let balanceDecision = 'positive';
  extractList.forEach(element => {
    if(element.type === 'input'){
      balance += parseFloat(element.price)
    }else{
      balance -= parseFloat(element.price)
    }
  });
  balanceDecision = (balance === -balance) ? 'negative' : 'positive'

  return (
    <Container>
      <ExtractField>
        {extractList.length === 0 ? <span><h1>Não há registros de entrada ou saída</h1></span> : 
          extractList.map((item) => {
            return(
              <ExtractItem type={item.type} key={item.id}>
                <div>
                  <p className='date'>{dayjs(item.createdAt).format('DD/MM')}</p>
                  <p className='description'>{item.description}</p>
                </div>
                <p className='price'>{parseFloat(item.price).toFixed(2).replace('.', ',')}</p>
              </ExtractItem>
            )
          })
        }
      </ExtractField>
      <TotalField balance={balanceDecision}>
        <p className='totalTitle'>SALDO</p>
        <p className='total'>{parseFloat(balance).toFixed(2).replace('.', ',')}</p>
      </TotalField>
    </Container>
  )
}

export default ExtractArea;