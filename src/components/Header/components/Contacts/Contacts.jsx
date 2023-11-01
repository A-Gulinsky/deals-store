
import wt from 'assets/contacts/whatsapp.png'
import tg from 'assets/contacts/telegram.png'
import { Ul } from './Contacts.styled'

export const Contacts = () => {

  return (
    <Ul>
      <li>
        <a href="/">
          <img src={wt} alt="whatsapp" width='40' height='40' />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={tg} alt="whatsapp" width='40' height='40' />
        </a>
      </li>
    </Ul>
  )
}