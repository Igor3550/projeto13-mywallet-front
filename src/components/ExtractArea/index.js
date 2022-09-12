import {
  Container,
  ExtractField,
  ExtractItem,
  TotalField
} from './style'
import dayjs from 'dayjs'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { deleteExtract } from '../../services/mywallet'
import { useNavigate } from 'react-router-dom'

const ExtractArea = ({ extractList }) => {
  const navigate = useNavigate()

  const { user } = useContext(UserContext)

  let balance = 0;
  let balanceDecision = 'positive';
  extractList.forEach(element => {
    if(element.type === 'input'){
      balance += parseFloat(element.price)
    }else{
      balance -= parseFloat(element.price)
    }
  });
  balanceDecision = (balance < 0 ? 'negative' : 'positive');
  if(balance<0) balance = -balance

  function handleDeleteExtract (extractId) {
    const confimation = window.confirm('Deseja deletar este item?')
    if(confimation){
      const promise = deleteExtract(extractId, user.token);
      promise.catch((error) => {
        if(error.response.status === 401) {
          alert(`Erro: ${error.message}`);
          navigate('/login');
        }else{
          alert(`Ocorreu um erro: ${error.message}`)
        }
      })
      promise.then(() => {
        alert('Item deletado com sucesso!')
        navigate('/login');
      })
    }
  }

  return (
    <Container>
      <ExtractField>
        {extractList.length === 0 ? <span><h1>Não há registros de entrada ou saída</h1></span> : 
          extractList.map((item) => {
            return(
              <ExtractItem type={item.type} key={item._id}>
                <div>
                  <p className='date'>{dayjs(item.createdAt).format('DD/MM')}</p>
                  <p className='description'>{item.description}</p>
                </div>
                <div>
                  <p className='price'>{parseFloat(item.price).toFixed(2).replace('.', ',')}</p>
                  <p className='deleteButton' onClick={() => handleDeleteExtract(item._id)}>x</p>
                </div>
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