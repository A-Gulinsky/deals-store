
import { CloseBtn, TopElementsContainer } from './TopElements.styled'

// svg
import {AiOutlineClose} from 'react-icons/ai'
import {ReactComponent as Svg} from 'assets/logo/MenuLogo.svg'


export const TopElements = ({onClose}) => {

  return (
    <TopElementsContainer>

      <a href="/deals-store">
      <Svg width='100' height='80'/>
      </a>

      <CloseBtn type="button" onClick={onClose}>
        <AiOutlineClose style={{width: 30, height: 30}} fill='#000000'/>
      </CloseBtn>
    </TopElementsContainer>
  )
}