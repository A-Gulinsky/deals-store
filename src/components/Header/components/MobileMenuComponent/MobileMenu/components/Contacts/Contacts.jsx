
import wt from 'assets/contacts/whatsapp.png'
import tg from 'assets/contacts/telegram.png'

import { Ul,A,B } from "./Contacts.styled"

export const Contacts = () => {

  return (
    <Ul>
        <li>
          <A href="/">
            <img src={wt} alt="whats app" width='40' height='40' />
            <B>WHATSAPP GROUP</B>
          </A>
        </li>
        <li>
          <A href="/">
            <img src={tg} alt="whats app" width='40' height='40' />
            <B>TELEGRAM GROUP</B>
          </A>
        </li>
      </Ul>
  )
}