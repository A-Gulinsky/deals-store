import { A, Nav, Ul } from "./NavMenu.styled"

export const NavMenu = ({onClose}) => {

  return (
    <Nav>
      <Ul>
        <li>
          <A to="/store" onClick={onClose}>
            Store
          </A>
        </li>
        <li>
          <A to="/aboutus" onClick={onClose}>
            About Us
          </A>
        </li>
        <li>
          <A to="/contactus" onClick={onClose}>
            Contact Us
          </A>
        </li>
        <li>
          <A to="/ad" onClick={onClose}>
            Advertiser Disclosure
          </A>
        </li>
      </Ul>
    </Nav>
  )
}