
// emotion
import { btnStyle, Button, CommunicationContainer, InputTitle, Ul } from "./CommunicationBtnList.styled"

// react icons
import { MdPhoneIphone } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaViber } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'

// props
import PropTypes from 'prop-types'

export const CommunicationBtnList = ({activeChoice,handleChoiceClick}) => {
  
  return (
    <CommunicationContainer>
      <InputTitle>Communication method</InputTitle>
      <Ul>

        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('phone')}
            active={activeChoice === 'phone' && true}
            style={{filter: 'drop-shadow(0px 0px 4px #77d5f79f)'}}
          >
            <MdPhoneIphone style={btnStyle}/>
          </Button>
        </li>

        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('telegram')}
            active={activeChoice === 'telegram' && true}
            style={{filter: 'drop-shadow(0px 0px 8px #037bf3f2)'}}
          >
            <PiTelegramLogo style={btnStyle} />
          </Button>
        </li>

        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('whatsapp')}
            active={activeChoice === 'whatsapp' && true}
            style={{filter: 'drop-shadow(0px 0px 8px #04e10bd2)'}}
          >
            <AiOutlineWhatsApp style={btnStyle} />
          </Button>
        </li>

        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('viber')}
            active={activeChoice === 'viber' && true}
            style={{filter: 'drop-shadow(0px 0px 8px #7500ebd2)'}}
          >
            <FaViber style={btnStyle} />
          </Button>
        </li>
        
      </Ul>
    </CommunicationContainer>
  )
}

CommunicationBtnList.propTypes = {
  activeChoice: PropTypes.string,
  handleChoiceClick: PropTypes.func,
};