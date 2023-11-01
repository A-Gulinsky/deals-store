import { A, B, H3, JoinUsContainer, Ul } from "./JoinUs.styled"

import wt from 'assets/contacts/whatsapp.png'
import tg from 'assets/contacts/telegram.png'

export const JoinUs = () => {

  return (
    <JoinUsContainer>
      <H3>Join our Community!</H3>
      <Ul>
        <li>
          <A href="/">
            <img src={wt} alt="whats app" width='60' height='60' />
            <B>WHATSAPP GROUP</B>
          </A>
        </li>
        <li>
          <A href="/">
            <img src={tg} alt="whats app" width='60' height='60' />
            <B>TELEGRAM GROUP</B>
          </A>
        </li>
      </Ul>
    </JoinUsContainer>
  )
}