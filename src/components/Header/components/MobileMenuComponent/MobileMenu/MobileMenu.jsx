
// emotion
import { MobileMenuContainer } from "./MobileMenu.styled";

// components

// anim
import { openMenu, closeMenu } from "./anim";

// props
import PropTypes from 'prop-types'
import { TopElements } from "./components/TopElements/TopElements";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Contacts } from "./components/Contacts/Contacts";

export const MobileMenu = ({ onClose, isOpen }) => {

  return (
    <MobileMenuContainer
      variants={isOpen ? openMenu : closeMenu}
      initial='hidden'
      animate='visible'
      transition={{duration: 0.4}}
    >
      
      <TopElements onClose={onClose} />
      <NavMenu onClose={onClose} />
      <Contacts />

    </MobileMenuContainer>
  );
}

MobileMenu.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
}
